// --- DATA ---
      // Mapping index: A=0, B=1, C=2, D=3
      const sectionTitles = {
        1: "PHẦN 1: NHẬN BIẾT",
        2: "PHẦN 2: THÔNG HIỂU",
        3: "PHẦN 3: VẬN DỤNG",
        4: "PHẦN 4: VẬN DỤNG CAO",
      };

      const questionData = [
        // PHẦN 1
        {
          id: 1,
          section: 1,
          q: "Chất nào sau đây được coi là chất tinh khiết?",
          options: [
            "A. Nước biển",
            "B. Nước cất",
            "C. Nước chanh",
            "D. Nước khoáng",
          ],
          correct: 1,
        },
        {
          id: 2,
          section: 1,
          q: "Hỗn hợp đồng nhất là hỗn hợp:",
          options: [
            "A. Có thành phần giống nhau tại mọi vị trí",
            "B. Có thể quan sát rõ các lớp chất riêng biệt",
            "C. Chứa các hạt chất rắn lơ lửng trong chất lỏng",
            "D. Chứa các giọt chất lỏng không tan phân tán vào nhau",
          ],
          correct: 0,
        },
        {
          id: 3,
          section: 1,
          q: "Hệ phân tán gồm các hạt chất rắn lơ lửng trong chất lỏng được gọi là:",
          options: [
            "A. Dung dịch",
            "B. Nhũ tương",
            "C. Huyền phù",
            "D. Chất tinh khiết",
          ],
          correct: 2,
        },
        {
          id: 4,
          section: 1,
          q: "Trong dung dịch nước đường, chất tan là:",
          options: [
            "A. Nước",
            "B. Đường",
            "C. Nước đường",
            "D. Cả nước và đường",
          ],
          correct: 1,
        },
        {
          id: 5,
          section: 1,
          q: "Phương pháp nào dùng để tách chất rắn không tan ra khỏi hỗn hợp lỏng?",
          options: ["A. Cô cạn", "B. Lọc", "C. Chiết", "D. Dùng nam châm"],
          correct: 1,
        },
        {
          id: 6,
          section: 1,
          q: "Hỗn hợp nào sau đây là một nhũ tương?",
          options: [
            "A. Nước phù sa",
            "B. Hỗn hợp dầu ăn và nước",
            "C. Nước muối",
            "D. Nước đường",
          ],
          correct: 1,
        },
        {
          id: 7,
          section: 1,
          q: "Để tách các hạt sắt ra khỏi hỗn hợp mạt sắt và gỗ, ta nên dùng cách nào?",
          options: ["A. Cô cạn", "B. Chiết", "C. Lọc", "D. Dùng nam châm"],
          correct: 3,
        },
        {
          id: 8,
          section: 1,
          q: "Yếu tố nào sau đây không làm tăng tốc độ hòa tan của một chất rắn trong nước?",
          options: [
            "A. Khuấy đều",
            "B. Đun nóng dung môi",
            "C. Nghiền nhỏ chất rắn",
            "D. Để yên hỗn hợp trong bóng tối",
          ],
          correct: 3,
        },
        {
          id: 9,
          section: 1,
          q: "Để tách muối ăn ra khỏi dung dịch nước muối, ta sử dụng phương pháp:",
          options: ["A. Lọc", "B. Chiết", "C. Cô cạn", "D. Dùng nam châm"],
          correct: 2,
        },
        {
          id: 10,
          section: 1,
          q: "Thành phần của hỗn hợp:",
          options: [
            "A. Có tính chất hoàn toàn mới so với các chất ban đầu",
            "B. Các chất thành phần vẫn giữ nguyên tính chất ban đầu",
            "C. Luôn có tỉ lệ xác định về khối lượng",
            "D. Chỉ bao gồm các chất ở thể lỏng",
          ],
          correct: 1,
        },

        // PHẦN 2
        {
          id: 11,
          section: 2,
          q: "Tại sao nói không khí sạch là một hỗn hợp đồng nhất?",
          options: [
            "A. Vì nó chỉ chứa một loại khí duy nhất là Oxygen",
            "B. Vì các khí thành phần trộn lẫn đều và không phân biệt được bằng mắt thường",
            "C. Vì nó có nhiệt độ sôi xác định",
            "D. Vì nó có thể hóa lỏng ở nhiệt độ thấp",
          ],
          correct: 1,
        },
        {
          id: 12,
          section: 2,
          q: "Điểm khác biệt lớn nhất giữa huyền phù và nhũ tương là:",
          options: [
            "A. Huyền phù chứa chất khí, nhũ tương chứa chất rắn",
            "B. Huyền phù chứa chất rắn lơ lửng, nhũ tương chứa chất lỏng phân tán",
            "C. Huyền phù là hỗn hợp đồng nhất, nhũ tương là hỗn hợp không đồng nhất",
            "D. Huyền phù không thể tách bằng phương pháp lọc",
          ],
          correct: 1,
        },
        {
          id: 13,
          section: 2,
          q: "Tại sao không thể dùng phương pháp lọc để tách đường ra khỏi nước đường?",
          options: [
            "A. Vì đường là chất rắn",
            "B. Vì nước đường là hỗn hợp không đồng nhất",
            "C. Vì đường đã tan hoàn toàn, kích thước hạt đường nhỏ đi qua được lỗ giấy lọc",
            "D. Vì đường dễ bay hơi khi gặp nước",
          ],
          correct: 2,
        },
        {
          id: 14,
          section: 2,
          q: "Khi nhỏ một giọt mực vào cốc nước nóng, mực tan nhanh hơn trong cốc nước lạnh là do:",
          options: [
            "A. Nước nóng làm mực biến đổi hóa học",
            "B. Các phân tử nước ở nhiệt độ cao chuyển động nhanh hơn, va chạm nhiều hơn",
            "C. Nước nóng làm mực nặng hơn",
            "D. Nước lạnh ngăn cản sự di chuyển của các hạt màu",
          ],
          correct: 1,
        },
        {
          id: 15,
          section: 2,
          q: "Phương pháp chiết thường được dùng để tách hai chất lỏng khi chúng có đặc điểm:",
          options: [
            "A. Tan tốt vào nhau",
            "B. Không tan vào nhau và phân thành các lớp chất riêng biệt",
            "C. Có nhiệt độ sôi giống nhau",
            "D. Có cùng màu sắc và mùi vị",
          ],
          correct: 1,
        },
        {
          id: 16,
          section: 2,
          q: '"Vàng 24K" được coi là chất tinh khiết, còn "Vàng tây" (hợp kim của vàng và các kim loại khác) là hỗn hợp. Nhận định này:',
          options: [
            "A. Sai, vì cả hai đều là kim loại",
            "B. Đúng, vì vàng 24K chỉ chứa một chất là vàng, vàng tây chứa nhiều chất",
            "C. Sai, vì vàng tây có màu đẹp hơn",
            "D. Đúng, vì vàng 24K dễ nóng chảy hơn",
          ],
          correct: 1,
        },
        {
          id: 17,
          section: 2,
          q: "Mục đích của việc nghiền nhỏ viên đường phèn trước khi hòa tan là:",
          options: [
            "A. Để làm thay đổi tính chất hóa học của đường",
            "B. Để tăng diện tích tiếp xúc giữa đường và nước, giúp tan nhanh hơn",
            "C. Để làm cho đường trắng hơn",
            "D. Để đường không bị dính vào cốc",
          ],
          correct: 1,
        },
        {
          id: 18,
          section: 2,
          q: "Một cốc nước muối sau khi khuấy đều, vẫn còn một ít muối không tan ở đáy cốc. Ta gọi dung dịch phía trên là:",
          options: [
            "A. Dung dịch chưa bão hòa",
            "B. Dung dịch bão hòa (ở nhiệt độ đó)",
            "C. Chất tinh khiết",
            "D. Nhũ tương",
          ],
          correct: 1,
        },
        {
          id: 19,
          section: 2,
          q: "Tại sao khi làm muối từ nước biển, người dân lại dùng phương pháp phơi nắng (cô cạn) mà không dùng phương pháp lọc?",
          options: [
            "A. Vì muối tan trong nước nên không bị giữ lại trên màng lọc",
            "B. Vì lọc nước biển rất tốn kém",
            "C. Vì phơi nắng làm muối trở nên mặn hơn",
            "D. Vì giấy lọc sẽ bị rách khi gặp nước biển",
          ],
          correct: 0,
        },
        {
          id: 20,
          section: 2,
          q: "Nước phù sa được xếp vào loại huyền phù vì:",
          options: [
            "A. Nó là hỗn hợp của hai chất lỏng",
            "B. Nó chứa các hạt đất sét, cát nhỏ lơ lửng trong nước",
            "C. Nó là một hỗn hợp đồng nhất",
            "D. Nó không bao giờ bị lắng xuống đáy",
          ],
          correct: 1,
        },

        // PHẦN 3
        {
          id: 21,
          section: 3,
          q: "Để tách hỗn hợp gồm cát và muối ăn, quy trình thực hiện đúng nhất là:",
          options: [
            "A. Cô cạn -> Hòa tan vào nước -> Lọc",
            "B. Lọc -> Cô cạn -> Hòa tan vào nước",
            "C. Hòa tan vào nước -> Lọc -> Cô cạn",
            "D. Hòa tan vào nước -> Chiết -> Lọc",
          ],
          correct: 2,
        },
        {
          id: 22,
          section: 3,
          q: "Trong y tế, khi cần pha thuốc tiêm cho bệnh nhân, người ta phải dùng nước cất thay vì nước khoáng. Lý do chính là:",
          options: [
            "A. Nước cất ngọt hơn nước khoáng",
            "B. Nước cất là chất tinh khiết, không chứa các tạp chất hay vi khuẩn có hại",
            "C. Nước khoáng làm thuốc tan nhanh quá mức",
            "D. Nước cất có màu sắc đẹp hơn",
          ],
          correct: 1,
        },
        {
          id: 23,
          section: 3,
          q: "Khi nấu nước dùng (nước lèo) cho món phở, để nước được trong và không còn các vụn xương hay bọt, người đầu bếp thường dùng một tấm vải thưa để:",
          options: [
            "A. Thực hiện phương pháp chiết",
            "B. Thực hiện phương pháp lọc",
            "C. Thực hiện phương pháp cô cạn",
            "D. Thực hiện phương pháp dùng nam châm",
          ],
          correct: 1,
        },
        {
          id: 24,
          section: 3,
          q: "Một người thợ mộc vô tình để mạt sắt lẫn vào đống mạt gỗ. Cách nhanh nhất để tách mạt sắt ra là:",
          options: [
            "A. Đổ tất cả vào nước để gỗ nổi lên",
            "B. Nhặt từng hạt mạt sắt bằng tay",
            "C. Sử dụng một thanh nam châm đưa qua hỗn hợp",
            "D. Đốt cháy hỗn hợp để lấy sắt",
          ],
          correct: 2,
        },
        {
          id: 25,
          section: 3,
          q: "Để hòa tan một viên đường phèn trong nước nhanh nhất, em nên chọn bộ thao tác nào dưới đây?",
          options: [
            "A. Để viên đường nguyên vẹn vào nước lạnh và để yên",
            "B. Nghiền nhỏ đường, cho vào nước nóng và khuấy đều",
            "C. Nghiền nhỏ đường, cho vào nước lạnh và để yên",
            "D. Để viên đường nguyên vẹn vào nước nóng và để yên",
          ],
          correct: 1,
        },
        {
          id: 26,
          section: 3,
          q: "Em hãy quan sát một lọ nước xốt mayonnaise. Đây là một loại nhũ tương. Nếu để lâu hoặc bị hỏng, ta thấy một lớp dầu nổi lên trên. Để tách lớp dầu này ra, ta có thể dùng phương pháp:",
          options: [
            "A. Cô cạn",
            "B. Lọc qua giấy lọc",
            "C. Chiết",
            "D. Dùng nam châm",
          ],
          correct: 2,
        },

        // PHẦN 4
        {
          id: 27,
          section: 4,
          q: "Một mẫu nước thải có chứa cát, dầu hỏa và muối tan. Quy trình nào sau đây có thể tách riêng biệt các thành phần này?",
          options: [
            "A. Lọc (tách cát) -> Chiết (tách dầu) -> Cô cạn (tách muối)",
            "B. Chiết (tách dầu) -> Cô cạn (tách muối) -> Lọc (tách cát)",
            "C. Lọc (tách cát) -> Cô cạn (tách muối) -> Chiết (tách dầu)",
            "D. Cô cạn (tách muối) -> Lọc (tách cát) -> Chiết (tách dầu)",
          ],
          correct: 0,
        },
        {
          id: 28,
          section: 4,
          q: "Trong thí nghiệm tự chế hệ thống lọc nước bùn tại nhà bằng cát, sỏi và than hoạt tính, lớp than hoạt tính có vai trò quan trọng nhất là:",
          options: [
            "A. Giữ lại các hạt cát lớn",
            "B. Làm nước chảy nhanh hơn",
            "C. Hấp phụ các chất gây mùi, màu và một số tạp chất tan trong nước",
            "D. Làm cho nước có vị ngọt",
          ],
          correct: 2,
        },
        {
          id: 29,
          section: 4,
          q: 'Khẳng định nào sau đây về "Nước biển" là đúng nhất?',
          options: [
            "A. Nước biển là một chất tinh khiết vì nó chỉ có ở đại dương",
            "B. Nước biển là một hỗn hợp không đồng nhất vì có cá và rong biển",
            "C. Nước biển là một hỗn hợp đồng nhất (dung dịch) của nhiều loại muối tan trong nước",
            "D. Nước biển không phải là hỗn hợp vì nó có công thức hóa học xác định",
          ],
          correct: 2,
        },
        {
          id: 30,
          section: 4,
          q: "Quan sát thí nghiệm: Cho một giọt dầu ăn vào cốc nước, khuấy mạnh rồi để yên. Hiện tượng quan sát được chứng minh rằng:",
          options: [
            "A. Dầu ăn và nước tạo thành một dung dịch bền vững",
            "B. Dầu ăn không tan trong nước và nhẹ hơn nước nên nổi lên trên (nhũ tương tạm thời)",
            "C. Dầu ăn đã biến mất hoàn toàn trong nước",
            "D. Nước và dầu ăn là chất tinh khiết sau khi trộn",
          ],
          correct: 1,
        },
      ];

      // --- STATE ---
      let userAnswers = {}; // { 1: 0, 2: 1 ... }
      let isSubmitted = false;

      // --- INITIALIZATION ---
      document.addEventListener("DOMContentLoaded", () => {
        renderQuiz();
      });

      // --- RENDER ---
      function renderQuiz() {
        const container = document.getElementById("quiz-container");
        let currentSection = 0;
        let html = "";

        questionData.forEach((q, index) => {
          // Section Header
          if (q.section !== currentSection) {
            currentSection = q.section;
            html += `<div class="section-title">${sectionTitles[currentSection]}</div>`;
          }

          // Options HTML
          let optionsHtml = "";
          q.options.forEach((opt, optIdx) => {
            optionsHtml += `
                        <div class="option-item" id="opt-item-${q.id}-${optIdx}">
                            <input type="radio" 
                                name="q${q.id}" 
                                id="q${q.id}-opt${optIdx}" 
                                value="${optIdx}"
                                onchange="handleAnswer(${q.id}, ${optIdx})">
                            <label class="option-label" for="q${q.id}-opt${optIdx}">
                                ${opt}
                            </label>
                        </div>
                    `;
          });

          // Question Card
          html += `
                    <div class="question-card" id="card-${q.id}">
                        <div class="q-text">
                            <span class="q-number">Câu ${q.id}:</span>
                            ${q.q}
                        </div>
                        <div class="options-list">
                            ${optionsHtml}
                        </div>
                    </div>
                `;
        });

        container.innerHTML = html;
      }

      // --- LOGIC ---
      function handleAnswer(questionId, optionIndex) {
        if (isSubmitted) return;

        userAnswers[questionId] = optionIndex;
        updateProgress();
      }

      function updateProgress() {
        const total = questionData.length;
        const answered = Object.keys(userAnswers).length;

        document.getElementById("progress-count").innerText = answered;
        const percent = (answered / total) * 100;
        document.getElementById("progress-bar").style.width = `${percent}%`;
      }

      function submitQuiz() {
        const total = questionData.length;
        const answered = Object.keys(userAnswers).length;

        if (answered < total) {
          const confirmSubmit = confirm(
            `Bạn mới làm ${answered}/${total} câu. Bạn có chắc chắn muốn nộp bài không?`,
          );
          if (!confirmSubmit) return;
        }

        isSubmitted = true;
        document.getElementById("submit-btn").disabled = true;
        document.getElementById("submit-btn").innerText = "ĐÃ NỘP BÀI";
        document.getElementById("quiz-container").classList.add("submitted");

        // Lock inputs and Grade
        let correctCount = 0;

        questionData.forEach((q) => {
          const inputs = document.getElementsByName(`q${q.id}`);
          inputs.forEach((input) => (input.disabled = true));

          const userAnswer = userAnswers[q.id];
          const correctAnswer = q.correct;

          // Highlight Correct Answer
          const correctItem = document.getElementById(
            `opt-item-${q.id}-${correctAnswer}`,
          );
          if (correctItem) correctItem.classList.add("is-correct");

          if (userAnswer === correctAnswer) {
            correctCount++;
          } else if (userAnswer !== undefined) {
            // Highlight Wrong Answer
            const wrongItem = document.getElementById(
              `opt-item-${q.id}-${userAnswer}`,
            );
            if (wrongItem) wrongItem.classList.add("is-wrong");
          }
        });

        showResultModal(correctCount, total);
      }

      function showResultModal(correct, total) {
        const score = (correct / total) * 10;
        const formattedScore = score.toFixed(1);

        // Text & Color logic
        let rankText = "";
        let rankColor = "";
        let message = "";

        if (score >= 8) {
          rankText = "RẤT TỐT";
          rankColor = "#10b981"; // Green
          message = "Kiến thức của bạn rất vững chắc!";
        } else if (score >= 6) {
          rankText = "ĐẠT";
          rankColor = "#f59e0b"; // Amber
          message = "Bạn đã nắm được kiến thức cơ bản.";
        } else {
          rankText = "CẦN ÔN LẠI";
          rankColor = "#ef4444"; // Red
          message = "Hãy xem lại lý thuyết và làm lại nhé.";
        }

        // Update DOM
        document.getElementById("final-score").innerText = formattedScore;
        document.getElementById("result-rank").innerText = rankText;
        document.getElementById("result-rank").style.color = rankColor;
        document.getElementById("result-text").innerText = message;
        document.getElementById("correct-count").innerText =
          `${correct}/${total}`;
        document.getElementById("correct-percent").innerText =
          `${Math.round((correct / total) * 100)}%`;

        // Update Circle Chart
        const percent = (correct / total) * 100;
        document.getElementById("score-circle-graphic").style.background =
          `conic-gradient(${rankColor} ${percent}%, #e5e7eb ${percent}% 100%)`;
        document.querySelector(".score-number").style.color = rankColor;

        // Show Modal
        const modal = document.getElementById("result-modal");
        modal.style.display = "flex";
      }

      function closeModal() {
        document.getElementById("result-modal").style.display = "none";
      }

      function retryQuiz() {
        location.reload();
      }