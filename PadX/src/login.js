const token_duration = 600000;
var global_user = '';
$(document).ready(function () {
    if (sessionStorage.getItem('exist_token') != 'true') {
        destroyToken();
    } else {
        changeLoginLogoutMenu();
        enableReservationMenu();
    }
});
$("#login").click(function () {

    let url_login = "http://fenw.etsisi.upm.es:10000/users/login?username=";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    global_user = user;

    if (user === '' || pass === '') {
    } else {
        let url = url_login + user + '&password=' + pass;
        $.get(url)
            .done(function (data, request, res) {
                let token = res.getResponseHeader('authorization').split(' ')[1];
                setAutorizationToken(token, user);
            })
            .fail(function (data, request, res) {
                $("#toastError").toast('show');
            });
    }
});
$("#reservar").click(function () {
    reservationOptions();

});
$("#logout").click(function () {
    destroyToken();
    closeLogoutModal();
});

function reservationOptions() {
    if (sessionStorage.getItem('exist_token') != 'true') {
        $('#loginModal').modal('show');
    } else {
        if (verifyToken()) {
            showModalFields();
        }
    }
}

function showModalFields() {
    $('#fieldsModal').modal('show');
}

function showAvailableHours() {
    closeReservationModal();
    if (verifyToken()) {
        $('#availableHoursModal').modal('show');
    } else {
        $('#loginModal').modal('show');
    }
}

function setReservation() {
    closeAvalaibleModal();
    $("#toastReserva").toast('show');
}

function registerUser() {
    $('#registerModal').modal('hide');
    $("#toastRegistro").toast('show');
}

function setAutorizationToken(token, user) {
    let date = new Date();
    sessionStorage.setItem('exist_token', 'true');
    sessionStorage.setItem('token_time', date.getTime().toString());
    sessionStorage.setItem('token_duration', token_duration.toString());
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', user);
    enableReservationMenu();
    closeLoginModal();
}

function closeLoginModal() {
    $('#loginModal').modal('hide');
    changeLoginLogoutMenu();
}

function closeLogoutModal() {
    $('#logoutModal').modal('hide');
}

function closeReservationModal() {
    $('#fieldsModal').modal('hide');
}

function closeAvalaibleModal() {
    $('#availableHoursModal').modal('hide');
}

function changeLoginLogoutMenu() {
    let menuLogin = document.getElementById('MenuLogin')
    global_user = sessionStorage.getItem('user');
    menuLogin.innerText = 'Hola ' + global_user;
    menuLogin.href = '#logoutModal'
}

function changeLogoutLoginMenu() {
    let menuLogin = document.getElementById('MenuLogin')
    menuLogin.innerText = 'Ingresar';
    menuLogin.href = '#loginModal'
}

function enableReservationMenu() {
    document.getElementById("MenuReserva").classList.add('isEnable');
    document.getElementById("MenuReserva").classList.remove('isDisable');
    document.getElementById("MenuReserva").onclick = reservationOptions();

}

function disableReservationMenu() {
    document.getElementById("MenuReserva").classList.remove('isEnable');
    document.getElementById("MenuReserva").classList.add('isDisable');
    document.getElementById("MenuReserva").removeAttribute('onClick');
}

function verifyToken() {
    if (sessionStorage.getItem('exist_token') === 'true') {
        let date = new Date();
        let token_time = sessionStorage.getItem('token_time');
        token_time = Number(token_time) + token_duration;
        if (date.getTime() > token_time) {
            destroyToken();
            return false;
        } else {
            return true;

        }
    } else {
        return false;
    }
}

function destroyToken() {
    sessionStorage.setItem('exist_token', 'false');
    sessionStorage.removeItem('token_time');
    sessionStorage.removeItem('token_duration');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    disableReservationMenu();
    changeLogoutLoginMenu();
}

