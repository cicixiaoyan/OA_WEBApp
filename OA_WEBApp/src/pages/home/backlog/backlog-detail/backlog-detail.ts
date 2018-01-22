import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BacklogService } from '../backlogService';
import { NativeService } from '../../../../providers/NativeService';
import { FileService } from '../../../../providers/FileService';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { GlobalData } from '../../../../providers/GlobalData';
@IonicPage()
@Component({
    selector: 'page-backlog-detail',
    templateUrl: 'backlog-detail.html',
})
export class BacklogDetail {

    isComplete: boolean = false;
    item = {
        "FlowNumber": "",
            "strNextNodeNum": "",
            "strbkNextNodeNum": "",
            "fnName": "",
            "fName": null,
            "strfnid": "",
            "strfnWriteID": "",
            "wSerialNo": "",
            "Number": "",
            "whname": "",
            "ReviewMode": "",
            "strwUserIDs": "",
            "lblstrhyUserIDs": "",
            "lblstrhyUserNames": "",
            "wContent": "",
            "wTitle": "",
            "yj": [],
            "FormId": "",
            "ls": [],
            "UpNodeId": "",
            "UrgencyLevel": "",
        };
    opinion: string = '';
    downloaded: boolean = false;
    affName: string = '';
    FileNewName: string = "";

    data: any;

    opinionSelect: string;
    affixLs: Array<any>;

    showSave: boolean = true;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private backlogService: BacklogService,
                private nativeService: NativeService,
                private fileService: FileService,
                private globalData: GlobalData,
                private modalCtrl: ModalController
            ) {

        this.data = this.navParams.get("param");
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "id": this.data.Id,
            "uid": this.globalData.Uid,
            "username": this.globalData.Name,
            "UpNodeId": this.data.UpNodeId,
            "flowNumber": this.data.FlowNumber,
            "FormId": this.data.FormId
        };
        this.backlogService.getDetail(data).subscribe((resJson) => {
            if (resJson.Result){
                this.item = resJson.Data;

                if (this.item["strwUserIDs"].split(",").length == 2 
                    || this.item["ReviewMode"] === "仅一人通过审批即可向下流转"){
                    this.showSave = false;
                }

                if (this.item["Number"] != null){
                    this.backlogService.getAffix({"Number": this.item["Number"]}).subscribe(resJson1 => {
                        if (resJson1.Result) this.affixLs = resJson1.Data;
                    
                    });
                }
            }
            else{
                this.nativeService.showToast(resJson.Data);
                this.navCtrl.pop();
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BacklogDetail');
    }

    getOpinion(value){
        this.opinion = value;
    }

    approved(number: Number) {
        let data = {
            "id": this.data.Id,
            "uid": this.globalData.Uid,
            "username": this.globalData.Name,
            "whname": this.item.whname,
            "wContent": this.item.wContent,
            "fName": this.item.fName || "",
            "attach": this.affName,
            "attachnewname": this.FileNewName,
            "fnName": this.item.fName,
            "spyj": this.opinion,
            "ReviewMode": this.item.ReviewMode,
            "lblstrhyUserIDs": this.item.lblstrhyUserIDs,
            "lblstrhyUserNames": this.item.lblstrhyUserNames
        };
        if (number == 0){

            this.backlogService.save(data).subscribe(resJson => {
                this.nativeService.showToast(resJson.Data, 800);
                if (resJson.Result) {
                    
                } 
            });
        }else if (number == 1) {
            this.backlogService.savePass(data).subscribe(resJson => {
                this.nativeService.showToast(resJson.Data, 800);
                if (resJson.Result) {
                    let modal =  this.modalCtrl.create("BacklogApproveSuccussPage", 
                    {"content": this.item, "param": resJson.Data});
                    modal.present();
                    modal.onDidDismiss(data => {
                        data && this.navCtrl.pop();   
                    });
                }
            });
        }else{
            this.backlogService.saveFail(data).subscribe(resJson => {
                this.nativeService.showToast(resJson.Data, 800);
                if (resJson.Result) {
                    let modal =  this.modalCtrl.create("BacklogApproveFailPage", 
                    {"content": this.item, "param": resJson.Data});
                    modal.present();
                    modal.onDidDismiss(data => {
                        data && this.navCtrl.pop();   
                    });
                }
            });
        }


      
        // this.backlogService.save(data).subscribe(resJson => {
        //     if (!resJson.Result) return this.nativeService.showToast(resJson.Data);

        //     this.nativeService.showToast("提交审核意见成功");
        //     let modal = bol ? 
        //         this.modalCtrl.create("BacklogApproveSuccussPage", {"content": this.item, "id": resJson.Data}) :
        //         this.modalCtrl.create("BacklogApproveFailPage", {"content": this.item, "id": resJson.Data});
        //     modal.present();
        //     modal.onDidDismiss(data => {
        //         data && this.navCtrl.pop();   
        //     });
        // });
    }

    upload(){
        this.fileService.uploadAffix(0).subscribe(data => {
            let resJson = JSON.parse(data.response);
            if (data.responseCode === 200){
                this.affName = resJson.Data[0].OldName;
                this.FileNewName = resJson.Data[0].NewName;
            }else{
                this.nativeService.showToast(resJson.Data, 800);
            }
        });
    }

    download(path, name){
        // const target = name;
        let url = this.globalData.FILE_SERVE_URL + "Attach/flow/Work/" + path;
        this.fileService.download1(url, name).subscribe((path) => {
            this.downloaded = true;
            this.fileService.openFile(path).subscribe(() => {

            });
        });
    }   

    delete(){

    }


}
