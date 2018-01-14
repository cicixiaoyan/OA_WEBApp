import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BacklogService } from '../backlogService';
import { NativeService } from '../../../../providers/NativeService';
import { FileService } from '../../../../providers/FileService';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
/**
 * Generated class for the BacklogDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-backlog-detail',
    templateUrl: 'backlog-detail.html',
})
export class BacklogDetail {

    isComplete: boolean = false;
    item = {
        "Id": '',
        "WorkNextNodeID": '',
        "WNo": '',
        "Title": '',
        "WID": '',
        "WorkNumber": '',
        "UrgencyLevel": '',
        "Originator": '',
        "Step": '',
        "FromTp": '',
        "TemplateType": '',
        "Template": '',
        "Attachment": '',
        "Status": '',
    };
    opinion: '';
    downloaded: boolean = false;
    affName: string = '';
    FileNewName: string = "";
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private backlogService: BacklogService,
                private nativeService: NativeService,
                private fileService: FileService,
                private modalCtrl: ModalController
            ) {
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "id": this.navParams.get("id"),
            "Uid": this.backlogService.httpService.globalData.Uid
        };
        this.backlogService.TodoApproveLs(data).subscribe((resJson) => {
            if (resJson.Result){
                this.item = resJson.Data;
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

    approved(bol: boolean) {
        let data = {
            'Id': this.item.Id,
            'Template': this.item.Template,
            'TemplateType': this.item.TemplateType,
            'Title': this.item.Title,
            // 'ISPass': bol ? 0 : 1,
            'Userid': this.backlogService.httpService.globalData.Uid,
            'UserName': this.backlogService.httpService.globalData.Name,
            'FileName': this.affName,
            'FileNewName': this.FileNewName,
            'Opinion': this.opinion,
            'Step': this.item.Step,
        };
      
        this.backlogService.approveStep1(data).subscribe(resJson => {
            if (!resJson.Result) return this.nativeService.showToast(resJson.Data);

            this.nativeService.showToast("提交审核意见成功");
            let modal = bol ? 
                this.modalCtrl.create("BacklogApproveSuccussPage", {"content": this.item, "id": resJson.Data}) :
                this.modalCtrl.create("BacklogApproveFailPage", {"content": this.item, "id": resJson.Data});
            modal.present();
            modal.onDidDismiss(data => {
                data && this.navCtrl.pop();   
            });
        });
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
        const target = path.split("/").pop();
        let url = path.slice(3, -1);
        // let url = "http://192.168.0.49:789/Attach/flow/Work/201111302315473908417.pdf";
        this.fileService.download1(url, target).subscribe((path) => {
            this.downloaded = true;
            this.fileService.openFile(path).subscribe(() => {

            });
        });
    }   

    delete(){

    }


}
