(function (otp) {

    if (otp.length == 6 && !isNaN(otp)) {
        console.log("Valid OTP");
    }
    else {
        console.log("Invalid OTP");
    }

})("123456");