/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    /*
     * This is a demo code for Telegram WebApp for Bots
     * It contains basic examples of how to use the API
     * Note: all requests to backend are disabled in this demo, you should use your own backend
     */

    
    Telegram.WebApp.ready();
    Telegram.WebApp.MainButton.setParams({
        text      : 'Замовити',
        is_visible: true
    }).onClick(showAlert("Наш менеджер зателефонує Вам для підтвердження замовлення найближчим часом.);

    function showAlert(message) {
        Telegram.WebApp.showAlert(message);
    }
