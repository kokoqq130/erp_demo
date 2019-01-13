import React from 'react';
import View from '@View';

class Welcome extends View {
    render() {
        return (
            <div className="welcomeBox clearfix">
                <img className="welcomeImg pull-left" src="../static/img/welcome.png" alt="欢迎页面" />
                <div className="pull-left welcomeMainBox">
                    <div className="welcomeTitle">欢迎使用宝宝病情记录系统</div>
                    <p className="welcomeMain">我们都是和自己赛跑的人</p>
                    <p className="welcomeMain">为了更好地未来</p>
                    <p className="welcomeMain">拼命努力</p>
                    <p className="welcomeMain">争取一种意义非凡的胜利</p>
                    <p className="welcomeMainFooter">希望此系统能给您和您的宝宝带来一点点微小的帮助</p>
                </div>

            </div>
        );
    }
}

export default Welcome;
