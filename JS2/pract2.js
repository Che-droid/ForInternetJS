function pract2(){
    let currentStatusId = 0;
    const STATUS_LIST = ["", "Some text"];

    function setWindowStatus ()
    {
        currentStatusId = (currentStatusId + 1) % STATUS_LIST.length;
        window.status = STATUS_LIST[currentStatusId];
    }

    setInterval (setWindowStatus, 1000);
}