import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BacklogService } from '../backlogService';
import { NativeService } from '../../../../providers/NativeService';
import { FileService } from '../../../../providers/FileService';
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
        Attachment: '',
        Id: '',
        Status: '',
        Step: '',
        Template: '',
        Title: '',
        TemplateType: '',
        WorkNumber: '',
    };
    opinion: '';
    downloaded: boolean = false;
    affName: string = '';
    FileNewName: string = "";
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private backlogService: BacklogService,
                private nativeService: NativeService,
                private fileService: FileService
            ) {
        console.log(this.navParams.get("id"));
        this.initializeItems();
    }

    initializeItems() {
        let data = {
            "Id": this.navParams.get("id"),
            "Uid": this.backlogService.httpService.globalData.Uid
        };
        this.backlogService.getDone(data).subscribe((resJson) => {
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
        console.log("审批通过");
        let data = {
            'Id': this.item.Id,
            'Template': this.item.Template,
            // 'TemplateType': this.item.TemplateType,
            'Title': this.item.Title,
            'ISPass': bol ? 0 : 1,
            'Uid': this.backlogService.httpService.globalData.Uid,
            'Name': this.backlogService.httpService.globalData.Name,
            'affName': this.affName,
            'FileNewName': this.FileNewName,
            'Opinion': this.opinion,
            // 'Step': this.item.Step,
        };
        this.backlogService.TodoApprove(data).subscribe(resJson => {
            if (resJson.Result){
                this.nativeService.showToast("审核成功");
                this.navCtrl.pop();
            }else{
                this.nativeService.showToast(resJson.Data);
            }
        });
    }

    cancel() {
        this.navCtrl.pop();
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
