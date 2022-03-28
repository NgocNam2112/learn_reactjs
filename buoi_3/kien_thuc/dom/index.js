// document, window, location

// var heading = document.getElementById('main-content');

// console.log('heading', heading);

/*Thêm nội dung thẻ. */
document.getElementById("main-content").innerHTML = "Chào mừng các bạn tới với buổi 2 lớp ReactJS!!!"

/* Thay đổi thuộc tính. */
// document.getElementById("main-content").style.color = 'red'

/* Tạo thẻ mới. */
var hyperLink = document.createElement("a");
hyperLink.href = "https://youtube.com";
hyperLink.innerHTML = 'Hello ReactJS!!';

console.log('hyperLink', hyperLink);
document.getElementById("main-content").appendChild(hyperLink);