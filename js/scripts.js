/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

<script type="application/javascript">

    /*
     * This is a demo code for Telegram WebApp for Bots
     * It contains basic examples of how to use the API
     * Note: all requests to backend are disabled in this demo, you should use your own backend
     */

    const DemoApp = {
        initData      : Telegram.WebApp.initData || '',
        initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
        MainButton    : Telegram.WebApp.MainButton,

        init(options) {
            document.body.style.visibility = '';
            Telegram.WebApp.ready();
            Telegram.WebApp.MainButton.setParams({
                text      : 'CLOSE WEBVIEW',
                is_visible: true
            }).onClick(DemoApp.close);
        },
        expand() {
            Telegram.WebApp.expand();
        },
        close() {
            Telegram.WebApp.close();
        },
        toggleMainButton(el) {
            const mainButton = Telegram.WebApp.MainButton;
            if (mainButton.isVisible) {
                mainButton.hide();
                el.innerHTML = 'Show Main Button';
            } else {
                mainButton.show();
                el.innerHTML = 'Hide Main Button';
            }
        }
}
