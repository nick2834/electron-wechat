import Mock from 'mockjs';
const Users = {
    id: 1,
    name: 'nico',
    avatar: 'static/images/UserAvatar.jpg',
    area: Mock.Random.city(true), //地区
    sex: Mock.Random.integer(0, 1), //性别 1为男，0为女
    wxid: 'wx-' + Mock.Random.string('lower', 15), //微信号
};
const now = new Date();
const friendlist = [];
for (let i = 0; i < 30; i++) {
    let cName = Mock.Random.cname();
    friendlist.push(Mock.mock({
        id: i,
        wxid: 'wx-' + Mock.Random.string('lower', 15), //微信号
        initial: i == 0 ? '新的朋友' : Mock.Random.character('upper'), //姓名首字母
        avatar: i == 0 ? "static/images/newfriend.jpg" :Mock.Random.dataImage('42x42',cName.substring(0,cName.length -1)), //头像
        signature: "", //个性签名
        nickname: cName, //昵称
        sex: Mock.Random.integer(0, 1), //性别 1为男，0为女
        remark: i == 0 ? '新的朋友' : cName, //备注
        area: Mock.Random.city(true), //地区
    }));
}
const msgList = [Mock.mock({
    id: 1,
    user: {
        id:friendlist.length,
        name: "聊天机器人",
        avatar: 'static/images/robotAvatar.jpg',
        area: Mock.Random.city(true), //地区
        sex: Mock.Random.integer(0, 1), //性别 1为男，0为女
        wxid: "wx-lpszswxjzlhzaoe", //微信号
        nickname: "聊天机器人", //昵称
        initial:"R",
        remark:"聊天机器人"
    },
    messages: [{
        content: "按回车可以发送信息，还可以给我发送表情哟",
        date: now
    }],
    index: 1 // 当前在聊天列表中的位置,从1开始
})];
friendlist.push(msgList[0].user)
localStorage.setItem('friend-list',JSON.stringify(friendlist))
export {
    Users,
    friendlist,
    msgList
};