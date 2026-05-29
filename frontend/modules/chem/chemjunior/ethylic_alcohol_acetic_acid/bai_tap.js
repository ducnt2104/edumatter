  // --- DỮ LIỆU CÂU HỎI MỚI ---
      const sectionTitles = {
        1: "PHẦN I – NHẬN BIẾT",
        2: "PHẦN II – THÔNG HIỂU",
        3: "PHẦN III – VẬN DỤNG",
        4: "PHẦN IV – VẬN DỤNG CAO",
      };

      const questionData = [
        // PHẦN I
        {
          id: 1,
          section: 1,
          q: "Công thức phân tử của rượu ethanol là",
          options: [
            "A. CH<sub>4</sub>O",
            "B. C<sub>2</sub>H<sub>6</sub>O",
            "C. C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>",
            "D. C<sub>3</sub>H<sub>8</sub>O",
          ],
          correct: 1,
        },
        {
          id: 2,
          section: 1,
          q: "Nhóm chức quyết định tính chất hóa học đặc trưng của rượu ethanol là",
          options: [
            "A. Nhóm -COOH",
            "B. Nhóm -OH",
            "C. Nhóm -CH<sub>3</sub>",
            "D. Nhóm -CHO",
          ],
          correct: 1,
        },
        {
          id: 3,
          section: 1,
          q: "Độ cồn là số mililít ethanol nguyên chất có trong bao nhiêu mililít dung dịch rượu?",
          options: ["A. 10 mL", "B. 50 mL", "C. 100 mL", "D. 1000 mL"],
          correct: 2,
        },
        {
          id: 4,
          section: 1,
          q: "Công thức cấu tạo của acetic acid là",
          options: [
            "A. CH<sub>3</sub>-CH<sub>2</sub>-OH",
            "B. CH<sub>3</sub>-O-CH<sub>3</sub>",
            "C. CH<sub>3</sub>-COOH",
            "D. H-COOH",
          ],
          correct: 2,
        },
        {
          id: 5,
          section: 1,
          q: "Dung dịch acetic acid nồng độ từ 2% đến 5% được gọi là",
          options: [
            "A. Rượu trắng.",
            "B. Giấm ăn.",
            "C. Cồn công nghiệp.",
            "D. Nước vôi trong.",
          ],
          correct: 1,
        },
        {
          id: 6,
          section: 1,
          q: "Chất nào sau đây tác dụng với Sodium (Natri) giải phóng khí hydrogen?",
          options: [
            "A. CH<sub>4</sub>",
            "B. C<sub>2</sub>H<sub>4</sub>",
            "C. C<sub>2</sub>H<sub>5</sub>OH",
            "D. C<sub>6</sub>H<sub>6</sub>",
          ],
          correct: 2,
        },
        {
          id: 7,
          section: 1,
          q: "Acetic acid làm quỳ tím chuyển sang màu gì?",
          options: ["A. Xanh", "B. Đỏ", "C. Không đổi màu", "D. Vàng"],
          correct: 1,
        },
        {
          id: 8,
          section: 1,
          q: "Phản ứng giữa acetic acid và rượu ethanol tạo thành ester được gọi là",
          options: [
            "A. Phản ứng thế.",
            "B. Phản ứng cộng.",
            "C. Phản ứng ester hóa.",
            "D. Phản ứng trung hòa.",
          ],
          correct: 2,
        },
        {
          id: 9,
          section: 1,
          q: "Trong thực tế, ethanol được điều chế phổ biến bằng cách lên men chất nào sau đây?",
          options: [
            "A. Ethylene",
            "B. Tinh bột hoặc đường",
            "C. Acetic acid",
            "D. Muối ăn",
          ],
          correct: 1,
        },
        {
          id: 10,
          section: 1,
          q: "Ethyl acetate là sản phẩm của phản ứng ester hóa có mùi đặc trưng là",
          options: [
            "A. Mùi khét.",
            "B. Mùi hắc.",
            "C. Mùi thơm.",
            "D. Không mùi.",
          ],
          correct: 2,
        },

        // PHẦN II
        {
          id: 11,
          section: 2,
          q: "Trên nhãn một chai rượu ghi 45 độ. Ý nghĩa của con số này là",
          options: [
            "A. Trong 100 g rượu có 45 g ethanol nguyên chất.",
            "B. Trong 100 mL rượu có 45 mL ethanol nguyên chất.",
            "C. Trong chai rượu có chứa 45 mL nước.",
            "D. Nhiệt độ của rượu lúc đóng chai là 45 độ C.",
          ],
          correct: 1,
        },
        {
          id: 12,
          section: 2,
          q: "Đặc điểm cấu tạo nào của acetic acid khiến nó có tính acid?",
          options: [
            "A. Do có 2 nguyên tử Carbon trong phân tử.",
            "B. Do có nhóm -OH liên kết với nhóm -CH<sub>3</sub>.",
            "C. Do có nhóm -COOH liên kết với nhóm -CH<sub>3</sub>.",
            "D. Do phân tử có nhiều nguyên tử Hydrogen.",
          ],
          correct: 2,
        },
        {
          id: 13,
          section: 2,
          q: "Hiện tượng khi cho một mẩu Sodium vào ống nghiệm đựng rượu ethanol là",
          options: [
            "A. Mẩu Sodium tan dần và có sủi bọt khí.",
            "B. Có kết tủa trắng xuất hiện.",
            "C. Dung dịch chuyển sang màu xanh.",
            "D. Không có hiện tượng gì xảy ra.",
          ],
          correct: 0,
        },
        {
          id: 14,
          section: 2,
          q: "Để phân biệt rượu ethanol và acetic acid, thuốc thử đơn giản nhất là",
          options: [
            "A. Nước lọc.",
            "B. Quỳ tím.",
            "C. Phenolphthalein.",
            "D. Dung dịch nước bromine.",
          ],
          correct: 1,
        },
        {
          id: 15,
          section: 2,
          q: "Tại sao rượu vang hoặc rượu trắng để lâu ngày trong không khí thường bị chua?",
          options: [
            "A. Do rượu bị bay hơi hết.",
            "B. Do ethanol bị oxy hóa thành acetic acid bởi vi khuẩn và oxygen.",
            "C. Do rượu tác dụng với khí nitrogen trong không khí.",
            "D. Do bụi bẩn rơi vào làm rượu lên men thối.",
          ],
          correct: 1,
        },
        {
          id: 16,
          section: 2,
          q: "Phản ứng ester hóa giữa CH<sub>3</sub>COOH và C<sub>2</sub>H<sub>5</sub>OH cần chất xúc tác là",
          options: [
            "A. NaOH",
            "B. H<sub>2</sub>SO<sub>4</sub> loãng",
            "C. H<sub>2</sub>SO<sub>4</sub> đặc",
            "D. HCl",
          ],
          correct: 2,
        },
        {
          id: 17,
          section: 2,
          q: "Khi cho acetic acid tác dụng với vỏ trứng (thành phần chính là CaCO<sub>3</sub>), hiện tượng xảy ra là",
          options: [
            "A. Vỏ trứng tan dần và có sủi bọt khí.",
            "B. Có kết tủa đen xuất hiện.",
            "C. Vỏ trứng bị biến thành màu xanh.",
            "D. Vỏ trứng cứng thêm.",
          ],
          correct: 0,
        },
        {
          id: 18,
          section: 2,
          q: "Sản phẩm của phản ứng đốt cháy hoàn toàn ethanol là",
          options: [
            "A. C và H<sub>2</sub>O.",
            "B. CO và H<sub>2</sub>.",
            "C. CO<sub>2</sub> và H<sub>2</sub>O.",
            "D. CH<sub>3</sub>COOH và H<sub>2</sub>O.",
          ],
          correct: 2,
        },
        {
          id: 19,
          section: 2,
          q: "Alcohol và acid có mô hình phân tử khác nhau chủ yếu ở nhóm nguyên tử nào?",
          options: [
            "A. Nhóm -CH<sub>3</sub>",
            "B. Nhóm Carbonyl",
            "C. Nhóm chức (-OH và -COOH)",
            "D. Mạch Carbon",
          ],
          correct: 2,
        },
        {
          id: 20,
          section: 2,
          q: "Ứng dụng nào sau đây không phải của rượu ethanol?",
          options: [
            "A. Làm nhiên liệu cho động cơ.",
            "B. Làm dung môi hòa tan chất béo.",
            "C. Làm nguyên liệu sản xuất dược phẩm.",
            "D. Dùng để tẩy cặn vôi trong ấm đun nước.",
          ],
          correct: 3,
        },

        // PHẦN III
        {
          id: 21,
          section: 3,
          q: "Thể tích ethanol nguyên chất có trong 200 mL rượu 30 độ là",
          options: ["A. 30 mL", "B. 60 mL", "C. 90 mL", "D. 120 mL"],
          correct: 1,
        },
        {
          id: 22,
          section: 3,
          q: "Cho 4,6 gam ethanol tác dụng hoàn toàn với Sodium dư. Thể tích khí Hydrogen (đkc) thu được là",
          options: [
            "A. 1,2395 lít.",
            "B. 2,479 lít.",
            "C. 0,61975 lít.",
            "D. 4,958 lít.",
          ],
          correct: 0,
        },
        {
          id: 23,
          section: 3,
          q: "Để làm sạch cặn CaCO<sub>3</sub> bám ở đáy ấm đun nước, người ta dùng giấm ăn. Phương trình phản ứng minh họa là",
          options: [
            "A. 2CH<sub>3</sub>COOH + CaCO<sub>3</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + H<sub>2</sub>O + CO<sub>2</sub>",
            "B. CH<sub>3</sub>COOH + CaCO<sub>3</sub> → CH<sub>3</sub>COOCa + H<sub>2</sub>O + CO<sub>2</sub>",
            "C. CH<sub>3</sub>COOH + CaCO<sub>3</sub> → (CH<sub>3</sub>COO)<sub>2</sub>Ca + H<sub>2</sub>",
            "D. CH<sub>3</sub>COOH + CaCO<sub>3</sub> → Ca(OH)<sub>2</sub> + CO<sub>2</sub>",
          ],
          correct: 0,
        },
        {
          id: 24,
          section: 3,
          q: "Một người thợ dùng 100 mL rượu 90 độ để pha thành rượu 45 độ. Thể tích nước cần thêm vào là",
          options: ["A. 50 mL", "B. 100 mL", "C. 150 mL", "D. 200 mL"],
          correct: 1,
        },
        {
          id: 25,
          section: 3,
          q: "Đốt cháy hoàn toàn 0,1 mol acetic acid. Thể tích khí CO<sub>2</sub> (đkc) thu được là",
          options: [
            "A. 2,479 lít.",
            "B. 4,958 lít.",
            "C. 7,437 lít.",
            "D. 1,2395 lít.",
          ],
          correct: 1,
        },
        {
          id: 26,
          section: 3,
          q: "Sơ đồ chuyển hóa nào sau đây dùng để sản xuất giấm ăn từ ethylene?",
          options: [
            "A. Ethylene → Acetic acid → Ethanol",
            "B. Ethylene → Ethanol → Acetic acid",
            "C. Ethanol → Ethylene → Acetic acid",
            "D. Acetic acid → Ethanol → Ethylene",
          ],
          correct: 1,
        },

        // PHẦN IV
        {
          id: 27,
          section: 4,
          q: "Lên men giấm 100 mL rượu ethanol 9,2 độ. Biết hiệu suất phản ứng đạt 80% và khối lượng riêng của ethanol là 0,8 g/mL. Khối lượng acetic acid thu được là",
          options: ["A. 7,68 gam.", "B. 9,6 gam.", "C. 12 gam.", "D. 15 gam."],
          correct: 0,
        },
        {
          id: 28,
          section: 4,
          q: "Đun nóng hỗn hợp gồm 6 gam acetic acid và 6,9 gam ethanol với xúc tác H<sub>2</sub>SO<sub>4</sub> đặc. Sau phản ứng thu được 6,6 gam ethyl acetate. Hiệu suất của phản ứng ester hóa là",
          options: ["A. 60%", "B. 75%", "C. 80%", "D. 50%"],
          correct: 1,
        },
        {
          id: 29,
          section: 4,
          q: "Hỗn hợp X gồm ethanol và acetic acid. Cho m gam X tác dụng với Sodium dư thu được 0,3 mol khí H<sub>2</sub>. Mặt khác, để trung hòa m gam X cần vừa đủ 200 mL dung dịch NaOH 1M. Khối lượng của ethanol có trong hỗn hợp là",
          options: ["A. 4,6 gam.", "B. 9,2 gam.", "C. 18,4 gam.", "D. 23 gam."],
          correct: 2,
        },
        {
          id: 30,
          section: 4,
          q: "Đốt cháy hoàn toàn một lượng rượu ethanol rồi dẫn sản phẩm cháy vào dung dịch Ca(OH)<sub>2</sub> dư thu được 30 gam kết tủa. Khối lượng rượu đã đem đốt là",
          options: [
            "A. 4,6 gam.",
            "B. 6,9 gam.",
            "C. 9,2 gam.",
            "D. 13,8 gam.",
          ],
          correct: 1,
        },
      ];

      // --- LOGIC ỨNG DỤNG ---
      const userAnswers = new Array(questionData.length).fill(null);
      let isSubmitted = false;

      // 1. Render câu hỏi
      function renderQuiz() {
        const container = document.getElementById("quiz-app");
        let html = "";
        let currentSection = 0;

        questionData.forEach((item, index) => {
          // Render section header nếu bắt đầu section mới
          if (item.section !== currentSection) {
            html += `<div class="section-title">${sectionTitles[item.section]}</div>`;
            currentSection = item.section;
          }

          html += `
                <div class="question-card" id="q-card-${index}">
                    <div class="q-header">
                        <span class="q-number">Câu ${item.id}</span>
                    </div>
                    <div class="q-text">${item.q}</div>
                    <div class="options-list">
                        ${item.options
                          .map(
                            (opt, optIndex) => `
                            <div class="option-item" id="q${index}-opt-item-${optIndex}">
                                <input type="radio" 
                                       name="q${index}" 
                                       id="q${index}-opt${optIndex}" 
                                       value="${optIndex}"
                                       onchange="handleSelect(${index}, ${optIndex})">
                                <label for="q${index}-opt${optIndex}" class="option-label">
                                    ${opt}
                                </label>
                            </div>
                        `,
                          )
                          .join("")}
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
        updateProgress();
      }

      // 2. Xử lý chọn đáp án
      function handleSelect(questionIndex, optionIndex) {
        if (isSubmitted) return; // Không cho chọn lại khi đã nộp
        userAnswers[questionIndex] = optionIndex;
        updateProgress();
      }

      // 3. Cập nhật Progress Bar
      function updateProgress() {
        const answeredCount = userAnswers.filter((a) => a !== null).length;
        const total = questionData.length;
        const percent = (answeredCount / total) * 100;

        document.getElementById("progress-bar").style.width = `${percent}%`;
        document.getElementById("progress-text").textContent =
          `${answeredCount}/${total} đã làm`;
      }

      // 4. Nộp bài và Chấm điểm
      function submitQuiz() {
        if (isSubmitted) return;

        const answeredCount = userAnswers.filter((a) => a !== null).length;
        if (answeredCount < questionData.length) {
          const confirmSubmit = confirm(
            `Bạn mới làm ${answeredCount}/${questionData.length} câu. Bạn có chắc chắn muốn nộp bài không?`,
          );
          if (!confirmSubmit) return;
        }

        isSubmitted = true;
        let correctCount = 0;

        // Logic chấm và hiện màu
        questionData.forEach((item, index) => {
          const card = document.getElementById(`q-card-${index}`);
          const userChoice = userAnswers[index];
          const inputs = document.getElementsByName(`q${index}`);

          // Khóa input
          inputs.forEach((input) => (input.disabled = true));

          // Xử lý đếm điểm và đánh dấu thẻ
          if (userChoice === item.correct) {
            correctCount++;
            card.classList.add("correct");
          } else {
            if (userChoice !== null) {
              card.classList.add("wrong"); // Sai thì hiện đỏ
            }
          }

          // Hiển thị đáp án đúng SAU KHI nộp
          const correctOptionItem = document.getElementById(
            `q${index}-opt-item-${item.correct}`,
          );
          if (correctOptionItem) {
            correctOptionItem.classList.add("show-correct");
          }
        });

        // Tính điểm
        const score = (correctCount / questionData.length) * 10;
        showResult(score, correctCount);

        // Đổi nút
        document.getElementById("btn-submit").style.display = "none";
        document.getElementById("btn-reset").style.display = "block";
      }

      // 5. Hiển thị Modal Kết quả
      function showResult(score, correctCount) {
        const modal = document.getElementById("result-modal");
        const scoreEl = document.getElementById("modal-score");
        const countEl = document.getElementById("modal-correct-count");
        const badgeEl = document.getElementById("modal-badge");

        scoreEl.textContent = score.toFixed(1);
        countEl.textContent = `Đúng ${correctCount}/${questionData.length} câu`;

        // Nhận xét
        badgeEl.className = "result-badge";
        if (score >= 8.0) {
          badgeEl.textContent = "RẤT TỐT";
          badgeEl.classList.add("badge-good");
        } else if (score >= 6.0) {
          badgeEl.textContent = "ĐẠT";
          badgeEl.classList.add("badge-pass");
        } else {
          badgeEl.textContent = "CẦN ÔN LẠI";
          badgeEl.classList.add("badge-fail");
        }

        modal.classList.add("active");
      }

      function closeModal() {
        document.getElementById("result-modal").classList.remove("active");
      }

      // 6. Làm lại
      function resetQuiz() {
        if (isSubmitted) closeModal();

        // Reset biến
        userAnswers.fill(null);
        isSubmitted = false;

        // Reset UI
        renderQuiz();
        document.getElementById("btn-submit").style.display = "block";
        document.getElementById("btn-reset").style.display = "none";
        scrollToTop();
      }

      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Khởi chạy
      renderQuiz();