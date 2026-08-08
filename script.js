function addRecommendation() {
    // Lấy giá trị từ ô nhập nội dung nhận xét
    let recommendation = document.getElementById("new_recommendation");
    
    // Kiểm tra tính hợp lệ: Người dùng phải nhập gì đó mới được tính
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        
        // Tạo một khối div mới để chứa đoạn nhận xét vừa nhập
        var new_rec = document.createElement("div");
        new_rec.setAttribute("class", "recommendation");
        new_rec.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
        
        // Thêm khối div đó vào danh sách nhận xét hiện tại
        document.getElementById("all_recommendations").appendChild(new_rec); 
        
        // Làm sạch form (xóa text đã nhập) sau khi submit thành công
        recommendation.value = "";
        document.getElementById("new_recommendation_name").value = "";
        
        // Yêu cầu cốt lõi của Task 3: Chỉ hiển thị Popup sau khi submit thành công
        showPopup(true);
    } else {
        // Cảnh báo nếu người dùng ấn Submit mà để trống ô text
        alert("Please enter a recommendation before submitting.");
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible';
    } else {
        document.getElementById('popup').style.visibility = 'hidden';
    }
}
