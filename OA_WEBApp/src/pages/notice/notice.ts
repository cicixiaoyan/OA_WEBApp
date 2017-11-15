import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { NoticeDetail } from './notice-detail/notice-detail';
import { HttpService } from "../../providers/HttpService";
/**
 * Generated class for the Notice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-notice',
    templateUrl: 'notice.html'
})
export class Notice {
    nxPage: any = NoticeDetail;
    params: any = { id: 42 };
    searchKey: string;
    items;
    page: number = 1;
    size: number = 1;
    moredata: boolean = true; // 是否能加载更多
    isEmpty: boolean = false; // 是否无数据
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public httpService: HttpService) {
        this.initializeItems();
    }

    initializeItems() {
        let data = { page: 1, size: 1, action: "noticeall" };
        this.getList(data).subscribe(list => {
            if (!!list && list.length == 0) {
                this.isEmpty = true;
            }
            this.items = list;

        });
        // this.items = [
        //     {"ggid":"1","gglb":"公告类型","ggzt":"公告主题","lrr":"发布者","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"2","gglb":"公告类型2","ggzt":"公告主题2","lrr":"发布者2","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"3","gglb":"公告类型3","ggzt":"公告主题3","lrr":"发布者3","lrsj":"2012-12-12 12:12"},
        //     {"ggid":"4","gglb":"公告类型4","ggzt":"公告主题4","lrr":"发布者4","lrsj":"2012-12-12 12:12"}
        // ];
    }

    doRefresh(refresher: Refresher) {
        this.initializeItems();
        setTimeout(() => {
            console.log('数据加载完成');
            refresher.complete();
        }, 1000);
    }

    doInfinite(): Promise<any> {
        if (this.moredata) {
            this.size++; // 应该是this.page++,后台未设置好
            const data = { page: this.page, size: this.size };
            this.getList(data).subscribe(list => {
                if (list === []) {
                    this.moredata = false;
                } else {
                    this.items = this.items.concat(list);
                }
            });
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 500);
        });
    }

    private getList(data) {
        if (!data.page) {
            data.page = 1;
            data.size = 1;
        }
        data.action = "noticeall";
        return this.httpService.postFormData("ashx/Notice.ashx/noticeall", data).map(Response => Response.json());
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad Notice');
    }

    itemSelected() {

    }

    search(key) {
        // let data={action: "noticeBykeyWords", page: 1, title: "" + key + ""};
        // this.httpService.postFormData("ashx/Notice.ashx/noticeBykeyWords",data)
        //   .map(Response => Response.json())
        //   .subscribe(list => {
        //     this.items = list;
        //   });
    }
}
