function openTab(tabName, element) {
    // 1. Ẩn tất cả nội dung tab
    var contents = document.getElementsByClassName("tab-pane");
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.add("hidden");
        // Xóa style display flex để tránh xung đột với class hidden
        contents[i].style.display = "none";
    }

    // 2. Bỏ trạng thái active của tất cả các nút
    var buttons = document.getElementsByClassName("tab-btn");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    // 3. Hiển thị nội dung tab được chọn
    var selectedTab = document.getElementById(tabName);
    selectedTab.classList.remove("hidden");
    selectedTab.style.display = "flex"; // Khôi phục lại display flex

    // 4. Thêm trạng thái active cho nút được click
    element.classList.add("active");
}

// Kích hoạt tab đầu tiên khi load trang
document.addEventListener('DOMContentLoaded', function() {
    // Đảm bảo tab Afore hiện đầu tiên
    var defaultTab = document.getElementById('afore');
    defaultTab.style.display = 'flex';
});

