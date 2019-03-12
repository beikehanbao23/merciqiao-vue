import Axios from "axios";

/**
 * 系统认证接口
 */
export default {
    /**
     * 系统登陆
     */
    loginIn: function ({ loginName, password }) {
        var param = {
            loginName: loginName,
            password: password
        };
        return Axios.post('/api/shiro-api/login', param);

    },
    /**
     * 退出登陆
     */
    loginOut: function () {
        return Axios.post('/api/shiro-api/loginout');
    },
    /**
     * 记录登陆日志
     */ 
    loginLog: function ({ip,city,type}) {
        var param={
            ip:ip,
            city:city,
            type:type,

        };
        return Axios.post('/api/loginlog-api/save', param);
    },
    /**
     * 还原数据
     */ 
    rollBackTables: function () {
        return Axios.post('/api/loginlog-api/rollBackTables');
    },
     /**
     * 记录吸越分数
     */ 
    addYcyScore: function ({ip,city,score,mintime}) {
        var param={
            ip:ip,
            city:city,
            score:score,
            mintime:mintime,                
        };
        return Axios.post('/api/ycyscore-api/add', param);
    },
     /**
     * 查询个人排名
     */ 
    queryRank: function ({ip}) {
        var param={
            ip:ip,             
        };
        return Axios.post('/api/ycyscore-api/queryRank', param);
    },
     /**
     * 查询个人分数
     */ 
    queryScore: function ({ip}) {
        var param={
            ip:ip,             
        };
        return Axios.post('/api/ycyscore-api/queryScore', param);
    },
     /**
     * 查询总排名
     */ 
    queryRankList: function ({currentPage,pageSize}) {
        var param={
            currentPage:currentPage,
            pageSize:pageSize            
        };
        return Axios.post('/api/ycyscore-api/queryList', param);
    },
}
