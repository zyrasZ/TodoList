        
        // Mảng lưu danh sách việc cần làm
        const list = [];
        
        // Lấy dữ liệu đã nhập từ form và từ tbody của bảng
        const taskForm = document.getElementById('taskForm');
        const taskTableBody = document.getElementById('taskTableBody');

        // Hàm in bảng từ mảng list 
        function printList() {
            taskTableBody.innerHTML = '';
            for (let i = 0; i < list.length; i++) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${i + 1}</td>
                    <td>${list[i].name}</td>
                    <td>${list[i].age}</td>
                    <td>${list[i].task}</td>
                    <td><button class = "delete-btn">Xóa</button></td>                   
                `;
                taskTableBody.appendChild(newRow);
            } 
            const buttons = document.querySelectorAll('.delete-btn');
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].onclick = function() {
                    let row = buttons[j].closest('tr');// Tìm hàng của nút xóa
                    let inde = Array.from(taskTableBody.children).indexOf(row); // Tìm chỉ số của hàng trong tbody
                    list.splice(j, 1); // Xóa phần tử khỏi mảng
                    printList();
                }
            }
        }
        function addJob() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const task = document.getElementById('task').value;

        if (name && age && task) {
            list.push({ name, age, task }); // Thêm vào mảng
            printList(); // Cập nhật bảng
            taskForm.reset(); // Reset form
            } else {
                alert('Vui lòng điền đầy đủ thông tin!');
            }
        }
        taskForm.addEventListener('submit', function(e) { 
            e.preventDefault();
            addJob();
        });