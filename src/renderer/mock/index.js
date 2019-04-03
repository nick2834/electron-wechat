import Mock from 'mockjs';
const Users = {
    id: 1,
    name: 'nico',
    avatar: 'static/images/UserAvatar.jpg',
    area: Mock.Random.city(true), //地区
    sex: Mock.Random.integer(0, 1), //性别 1为男，0为女
    wxid: Mock.Random.name(), //微信号
};

const msgList = [];
const friendlist = [];
const now = new Date();
for (let j = 0; j < 5; j++) {
    let cName = Mock.Random.cname()
    msgList.push(Mock.mock({
        id: j + 1,
        user: {
            name: cName,
            avatar: Mock.Random.dataImage('42x42', cName.substring(0,cName.length - 1))
        },
        messages: [{
            content: j == 0 ? "按回车可以发送信息，还可以给我发送表情哟" : Mock.Random.sentence(5),
            date: now
        }],
        index: j + 1 // 当前在聊天列表中的位置,从1开始
    }))
}

for (let i = 0; i < 30; i++) {
    let cName = Mock.Random.cname();
    friendlist.push(Mock.mock({
        id: i,
        wxid: Mock.Random.name(), //微信号
        initial: i == 0 ? '新的朋友' : Mock.Random.character('upper'), //姓名首字母
        avatar: i == 0 ? "static/images/newfriend.jpg" :Mock.Random.dataImage('42x42',cName.substring(0,cName.length -1)), //头像
        signature: "", //个性签名
        nickname: cName, //昵称
        sex: Mock.Random.integer(0, 1), //性别 1为男，0为女
        remark: i == 0 ? '新的朋友' : cName, //备注
        area: Mock.Random.city(true), //地区
    }));
}
localStorage.setItem('friend-list',JSON.stringify(friendlist))
export {
    Users,
    friendlist,
    msgList
};