import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import {
    Users,
    friendlist,
    msgList
} from '@/mock';
import {
    emoji
} from './emoji';
Vue.use(Vuex)
//获取当前时间
const now = new Date();
var MsgList = localStorage.getItem('vue-chat') ? JSON.parse(localStorage.getItem('vue-chat')) : msgList;
var Friendlist = localStorage.getItem('friend-list') ? JSON.parse(localStorage.getItem('friend-list')) : friendlist;

const state = {
    // 输入的搜索值
    searchText: '',
    // 当前登录用户
    user: Users,
    // 对话好友列表
    chatlist: MsgList,
    // 好友列表
    friendlist: Friendlist,
    //emoji表情
    emojis: emoji,
    // 得知当前选择的是哪个对话
    selectId: 1,
    // 得知当前选择的是哪个好友
    selectFriendId: 1,
    //图灵机器人key
    robotKey: "c35e63602e1547c9880cc23805e7643d",
    //侧边栏隐藏显示
    isShow: false,

    toggleUserList: [],
    toggleUser:{},
    toggleShow:false,
    //当前选择人员的wxid
    selectedWxid:Users.wxid
}

const mutations = {
    // 从localStorage 中获取数据
    initData(state) {
        let data = localStorage.getItem('vue-chat');
        let friendlist = localStorage.getItem('friend-list')
        if (data) {
            state.chatlist = JSON.parse(data);
        }
        if (friendlist) {
            state.friendlist = JSON.parse(friendlist)
        }
    },
    // 获取搜索值
    search(state, value) {
        state.searchText = value
    },
    // 得知用户当前选择的是哪个对话。便于匹配对应的对话框
    selectSession(state, value) {
        state.isShow = false;
        state.selectId = value
    },
    // 得知用户当前选择的是哪个好友。
    selectFriend(state, value) {
        state.isShow = false;
        state.toggleShow = false;
        state.selectFriendId = value
    },
    selectedUser(state, value) {
        state.isShow = !state.isShow;
        state.selectId = value;
        state.toggleShow = false
    },
    // 发送信息
    sendMessage(state, msg) {
        let result = state.chatlist.find(session => session.id === state.selectId);

        result.messages.push({
            content: msg.content,
            date: new Date(),
            self: true,
            user: Users
        });
        setTimeout(() => {
            result.messages.push({
                content: msg.reply,
                date: new Date(),
                self: false,
                messageType: msg.messageType
            });
        }, 500)
    },

    // 选择好友后，点击发送信息。判断在聊天列表中是否有该好友，有的话跳到该好友对话。没有的话
    // 添加该好友的对话 并置顶
    send(state) {
        let result = state.friendlist.find(friend => friend.id === state.selectFriendId)
        let msg = state.chatlist.find(msg => msg.user.name === result.remark)
        if (!msg) {
            state.selectId = 1
            state.chatlist.map(item => {
                item.id++;
                item.index++;
            })
            state.chatlist.unshift({
                id: 1,
                user: {
                    name: result.remark,
                    avatar: result.avatar,
                    wxid: result.wxid
                },
                messages: [{
                    content: '已经置顶聊天，可以给我发信息啦！',
                    date: new Date()
                }],
                index: 1
            })
        } else {
            state.selectId = msg.index
        }
        router.push({
            path: '/main/home'
        })
    },
    //展开收缩侧边栏
    hideToggleBar(state, value) {
        state.isShow = value;
        state.toggleShow = false
    },
    //选择侧边栏获取对应人员
    showToggleUser(state, value) {
        state.toggleShow = false;
        state.selectedWxid = value.wxid
        state.toggleShow = true;
        state.toggleUser = value;
    },
    //显示对应人员详情窗口
    hideToggleModal(state, value){
        state.toggleShow = value
    }
}
const getters = {
    // 筛选出含有搜索值的聊天列表
    searchedChatlist(state) {
        let sessions = state.chatlist.filter(sessions => sessions.user.name.includes(state.searchText));
        return sessions
    },
    // 筛选出含有搜索值的好友列表
    searchedFriendlist(state) {
        let friends = state.friendlist.filter(friends => friends.remark.includes(state.searchText));
        return friends
    },
    // 通过当前选择是哪个对话匹配相应的对话
    selectedChat(state) {
        let session = state.chatlist.find(session => session.id === state.selectId);
        return session
    },
    //通过选择的好友ID合并对话用户
    selectedUserList(state) {
        let users = state.chatlist.filter(user => user.id == state.selectId);
        let toggleUserList = []
        users[0].user.id = users[0].id
        toggleUserList.push(state.user)
        toggleUserList.push(users[0].user)
        state.toggleUserList = toggleUserList;
        return state.toggleUserList;
    },
    // 通过当前选择是哪个好友匹配相应的好友
    selectedFriend(state) {
        let friend = state.friendlist.find(friend => friend.id === state.selectFriendId);
        return friend
    },
    //
    messages(state) {
        let session = state.chatlist.find(session => session.id === state.selectId);
        let messages = session.messages;
        messages.map(item => {
            if (item.messageType == 302000) {
                item.content = item.content.filter((items, index) => index <= 2);
            }
        })
        return session.messages
    },
    showToggleBar(state) {
        return state.isShow
    }
}

const actions = {
    search: ({
        commit
    }, value) => {
        setTimeout(() => {
            commit('search', value)
        }, 100)
    },
    selectSession: ({
        commit
    }, value) => commit('selectSession', value),
    selectFriend: ({
        commit
    }, value) => commit('selectFriend', value),
    selectedUser: ({
        commit
    }, value) => commit('selectedUser', value),
    selectedUser: ({
        commit
    }, value) => commit('selectedUser', value),
    sendMessage: ({
        commit
    }, msg) => commit('sendMessage', msg),
    send: ({
        commit
    }) => commit('send'),
    initData: ({
        commit
    }) => commit('initData')
}
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

// 监听聊天列表的值， 发生变化就保存在localStorage中
store.watch(
    (state) => state.chatlist,
    (val) => {
        localStorage.setItem('vue-chat', JSON.stringify(val));
    }, {
        deep: true
    }
)
export default store;