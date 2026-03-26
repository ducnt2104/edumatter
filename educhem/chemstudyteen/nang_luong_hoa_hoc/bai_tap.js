const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `
Câu 1. Phản ứng tỏa nhiệt là phản ứng trong đó có sự
A. hấp thụ năng lượng dưới dạng nhiệt.
B. giải phóng năng lượng dưới dạng nhiệt.
C. hấp thụ năng lượng dưới dạng điện năng.
D. giải phóng năng lượng dưới dạng cơ năng.

Câu 2. Phản ứng thu nhiệt là phản ứng trong đó có sự
A. hấp thụ năng lượng dưới dạng nhiệt từ môi trường.
B. giải phóng năng lượng dưới dạng nhiệt ra môi trường.
C. không thay đổi năng lượng nhiệt.
D. giải phóng ánh sáng.

Câu 3. Trong phản ứng tỏa nhiệt, năng lượng của hệ chất phản ứng so với năng lượng của hệ sản phẩm là
A. thấp hơn.
B. bằng nhau.
C. lớn hơn.
D. bằng không.

Câu 4. Trong phản ứng thu nhiệt, năng lượng của hệ chất phản ứng so với năng lượng của hệ sản phẩm là
A. thấp hơn.
B. cao hơn.
C. bằng nhau.
D. gấp đôi.

Câu 5. Dấu hiệu nhiệt độ của môi trường xung quanh khi xảy ra phản ứng tỏa nhiệt là
A. lạnh đi.
B. nóng lên.
C. không đổi.
D. đóng băng.

Câu 6. Dấu hiệu nhiệt độ của môi trường xung quanh khi xảy ra phản ứng thu nhiệt là
A. nóng lên.
B. lạnh đi.
C. sôi lên.
D. giữ nguyên.

Câu 7. Đại lượng đặc trưng cho nội năng của hệ và tích của áp suất với thể tích được gọi là
A. Entropy.
B. Enthalpy.
C. Năng lượng tự do Gibbs.
D. Nhiệt dung riêng.

Câu 8. Ký hiệu của biến thiên Enthalpy chuẩn là
A. ΔrH.
B. ΔfH.
C. ΔrH₂₉₈⁰.
D. ΔS.

Câu 9. Điều kiện chuẩn để xác định biến thiên enthalpy (đối với chất khí) có áp suất là
A. 1 atm.
B. 1 bar.
C. 760 mmHg.
D. 1 Pa.

Câu 10. Ở điều kiện chuẩn, nồng độ chất tan trong dung dịch là
A. 1 mol/L.
B. 0,1 mol/L.
C. 2 mol/L.
D. 10 mol/L.

Câu 11. Nhiệt độ thường được chọn ở điều kiện chuẩn là
A. 0 K.
B. 273 K (0 độ C).
C. 298 K (25 độ C).
D. 100 độ C.

Câu 12. Nhiệt tạo thành chuẩn được ký hiệu là
A. ΔrH₂₉₈⁰.
B. ΔfH₂₉₈⁰.
C. ΔH.
D. Q.

Câu 13. Quy ước về dấu của phản ứng tỏa nhiệt đối với ΔrH₂₉₈⁰ là
A. ΔrH₂₉₈⁰ > 0.
B. ΔrH₂₉₈⁰ < 0.
C. ΔrH₂₉₈⁰ = 0.
D. ΔrH₂₉₈⁰ ≥ 0.

Câu 14. Quy ước về dấu của phản ứng thu nhiệt đối với ΔrH₂₉₈⁰ là
A. ΔrH₂₉₈⁰ < 0.
B. ΔrH₂₉₈⁰ = 0.
C. ΔrH₂₉₈⁰ > 0.
D. ΔrH₂₉₈⁰ ≤ 0.

Câu 15. Nhiệt tạo thành chuẩn của các đơn chất bền nhất bằng
A. 1.
B. -1.
C. 0.
D. 100.

Câu 16. Phản ứng nung vôi (CaCO₃ phân hủy) là phản ứng
A. tỏa nhiệt.
B. thu nhiệt.
C. không thay đổi nhiệt.
D. oxy hóa khử.

Câu 17. Phản ứng đốt cháy nhiên liệu là phản ứng
A. thu nhiệt.
B. tỏa nhiệt.
C. trung hòa.
D. điện phân.

Câu 18. Phản ứng hòa tan viên vitamin C sủi vào nước là phản ứng
A. tỏa nhiệt.
B. thu nhiệt.
C. cháy.
D. kết tủa.

Câu 19. Phản ứng tạo gỉ sắt là phản ứng
A. thu nhiệt.
B. tỏa nhiệt.
C. phân hủy.
D. quang hợp.

Câu 20. Khi nung nóng Cu(OH)₂, đây là phản ứng
A. tỏa nhiệt.
B. thu nhiệt.
C. trao đổi.
D. thế.

Câu 21. Phương trình nhiệt hóa học là phương trình phản ứng hóa học có kèm theo
A. chất xúc tác.
B. trạng thái chất và giá trị ΔrH₂₉₈⁰.
C. màu sắc các chất.
D. tốc độ phản ứng.

Câu 22. Trong sơ đồ năng lượng của phản ứng tỏa nhiệt, đường năng lượng sẽ
A. đi lên.
B. đi ngang.
C. đi xuống.
D. đi theo hình sin.

Câu 23. Trong sơ đồ năng lượng của phản ứng thu nhiệt, đường năng lượng sẽ
A. đi xuống.
B. đi lên.
C. nằm ngang.
D. biến mất.

Câu 24. Entropy (S) là đại lượng đặc trưng cho
A. nhiệt độ của hệ.
B. áp suất của hệ.
C. mức độ hỗn loạn của hệ.
D. thể tích của hệ.

Câu 25. Trạng thái nào sau đây thường có Entropy lớn nhất?
A. Rắn.
B. Lỏng.
C. Khí.
D. Dung dịch.

Câu 26. Điều kiện để một phản ứng tự xảy ra theo chiều thuận dựa vào ΔG là
A. ΔG > 0.
B. ΔG < 0.
C. ΔG = 0.
D. ΔG ≥ 0.

Câu 27. Nếu ΔG = 0 thì hệ đang ở trạng thái
A. cân bằng.
B. phản ứng mãnh liệt.
C. dừng phản ứng hoàn toàn.
D. mới bắt đầu phản ứng.

Câu 28. Phản ứng nhiệt phân KClO₃ cần có xúc tác là
A. Fe.
B. MnO₂.
C. V₂O₅.
D. Ni.

Câu 29. Đơn vị thường dùng của biến thiên enthalpy là
A. J.
B. kJ.
C. kJ/mol.
D. cal.

Câu 30. Thí nghiệm cho CaO vào nước, hiện tượng quan sát được là
A. nước đóng băng.
B. nhiệt độ tăng mạnh, có hơi nước bốc lên.
C. không có hiện tượng gì.
D. xuất hiện kết tủa xanh.

Câu 31. Định luật Hess khẳng định nhiệt phản ứng phụ thuộc vào
A. cách tiến hành phản ứng.
B. các giai đoạn trung gian.
C. trạng thái đầu và trạng thái cuối.
D. thời gian phản ứng.

Câu 32. Công thức tính ΔrH₂₉₈⁰ dựa theo nhiệt tạo thành là
A. Tổng ΔfH (chất đầu) - Tổng ΔfH (sản phẩm).
B. Tổng ΔfH (sản phẩm) - Tổng ΔfH (chất đầu).
C. Tổng ΔfH (sản phẩm) + Tổng ΔfH (chất đầu).
D. Tích ΔfH (sản phẩm) / Tổng ΔfH (chất đầu).

Câu 33. Công thức tính ΔrH₂₉₈⁰ dựa theo năng lượng liên kết (Eb) là
A. Tổng Eb (sản phẩm) - Tổng Eb (chất đầu).
B. Tổng Eb (chất đầu) + Tổng Eb (sản phẩm).
C. Tổng Eb (chất đầu) - Tổng Eb (sản phẩm).
D. Tổng Eb (sản phẩm) / Tổng Eb (chất đầu).

Câu 34. Điều kiện áp dụng công thức tính ΔrH theo năng lượng liên kết là các chất phải ở thể
A. lỏng.
B. rắn.
C. khí.
D. dung dịch.

Câu 35. Phản ứng nhiệt nhôm dùng để hàn đường ray là ứng dụng của
A. phản ứng thu nhiệt.
B. phản ứng tỏa nhiệt.
C. phản ứng trung hòa.
D. phản ứng điện phân.

Câu 36. Quá trình hô hấp trong cơ thể cung cấp năng lượng là quá trình
A. thu nhiệt.
B. tỏa nhiệt.
C. đoạn nhiệt.
D. đẳng nhiệt.

Câu 37. Giá trị ΔfH₂₉₈⁰ của O₂ (g) là
A. -285,8 kJ/mol.
B. +180 kJ/mol.
C. 0 kJ/mol.
D. 100 kJ/mol.

Câu 38. Phản ứng 2H₂ + O₂ → 2H₂O có ΔrH₂₉₈⁰ = -571,6 kJ. Đây là phản ứng
A. tỏa nhiệt.
B. thu nhiệt.
C. không xác định.
D. phân hủy.

Câu 39. Khi hòa tan NH₄Cl vào nước, cảm giác tay chạm vào cốc sẽ thấy
A. nóng lên.
B. lạnh đi.
C. bình thường.
D. bị bỏng.

Câu 40. Trong phản ứng hóa học, sự phá vỡ liên kết cũ
A. giải phóng năng lượng.
B. không cần năng lượng.
C. cần cung cấp năng lượng.
D. tạo ra nhiệt.

Câu 41. Cho phản ứng: N₂ + O₂ → 2NO, ΔrH₂₉₈⁰ = +180 kJ. Khẳng định nào đúng?
A. Phản ứng tỏa nhiệt.
B. Môi trường xung quanh nóng lên.
C. Phản ứng thu nhiệt.
D. Năng lượng chất đầu cao hơn sản phẩm.

Câu 42. Biến thiên enthalpy của phản ứng phụ thuộc vào yếu tố nào sau đây?
A. Nhiệt độ và áp suất.
B. Chất xúc tác.
C. Tốc độ khuấy trộn.
D. Thể tích bình chứa.

Câu 43. Ý nghĩa của giá trị tuyệt đối |ΔrH₂₉₈⁰| càng lớn là
A. Phản ứng xảy ra càng nhanh.
B. Nhiệt lượng tỏa ra hoặc thu vào càng nhiều.
C. Phản ứng càng dễ cân bằng.
D. Phản ứng không xảy ra.

Câu 44. Tại sao khi đun bếp than cần quạt gió?
A. Để làm mát bếp.
B. Để cung cấp thêm Oxygen cho phản ứng cháy tỏa nhiệt mạnh hơn.
C. Để thổi bay tro bụi.
D. Để giảm nhiệt độ cháy.

Câu 45. Cho sơ đồ năng lượng: Chất tham gia nằm thấp hơn Sản phẩm. Đây là sơ đồ của
A. Phản ứng cháy.
B. Phản ứng tỏa nhiệt.
C. Phản ứng thu nhiệt.
D. Phản ứng oxi hóa.

Câu 46. Phản ứng nhiệt phân Cu(OH)₂ thành CuO và H₂O là phản ứng
A. Tỏa nhiệt, cần làm lạnh.
B. Thu nhiệt, cần đun nóng.
C. Tỏa nhiệt, tự xảy ra.
D. Thu nhiệt, làm môi trường nóng lên.

Câu 47. Trong sản xuất túi chườm lạnh, người ta lợi dụng tính chất của phản ứng
A. tỏa nhiệt.
B. thu nhiệt.
C. cháy.
D. kết tủa.

Câu 48. Xét phản ứng tạo gỉ sắt. Theo thời gian, nhiệt độ khối sắt gỉ so với môi trường sẽ (về lý thuyết)
A. giảm xuống rất thấp.
B. tăng lên do tỏa nhiệt.
C. không đổi.
D. dao động liên tục.

Câu 49. Vì sao nung đá vôi cần nhiệt độ cao liên tục?
A. Vì đó là phản ứng tỏa nhiệt.
B. Vì đó là phản ứng thu nhiệt.
C. Vì đá vôi rất cứng.
D. Vì cần xúc tác nhiệt.

Câu 50. Nếu ΔH > 0 và ΔS > 0, phản ứng sẽ tự xảy ra khi nào?
A. Ở mọi nhiệt độ.
B. Ở nhiệt độ thấp.
C. Ở nhiệt độ cao.
D. Không bao giờ xảy ra.

Câu 51. Nếu ΔH < 0 và ΔS > 0, phản ứng sẽ tự xảy ra khi nào?
A. Ở mọi nhiệt độ.
B. Chỉ ở nhiệt độ cao.
C. Chỉ ở nhiệt độ thấp.
D. Không bao giờ xảy ra.

Câu 52. Cho phản ứng A → B có ΔrH = -100 kJ. Phản ứng ngược lại B → A sẽ có ΔrH là
A. -100 kJ.
B. +100 kJ.
C. 0 kJ.
D. -200 kJ.

Câu 53. Nhiệt tạo thành chuẩn của CO₂ là -393,5 kJ/mol. Điều này nghĩa là
A. Cần cung cấp 393,5 kJ để tạo ra 1 mol CO₂.
B. Khi tạo ra 1 mol CO₂ từ C và O₂, tỏa ra 393,5 kJ nhiệt.
C. CO₂ không bền.
D. Phản ứng tạo CO₂ là thu nhiệt.

Câu 54. So sánh sự thuận lợi về mặt năng lượng (ở điều kiện thường):
A. Phản ứng thu nhiệt thuận lợi hơn tỏa nhiệt.
B. Phản ứng tỏa nhiệt thuận lợi hơn thu nhiệt.
C. Cả hai thuận lợi như nhau.
D. Không so sánh được.

Câu 55. Trong phản ứng: 2Na (s) + Cl₂ (g) → 2NaCl (s). Hệ số của NaCl trong phương trình tính ΔrH là
A. 1.
B. 2.
C. 0.
D. 0,5.

Câu 56. Để tính ΔrH của phản ứng CH₄ cháy, ta cần biết ΔfH của
A. CH₄, O₂, CO₂, H₂O.
B. CH₄, CO₂, H₂O.
C. Chỉ CH₄.
D. Chỉ CO₂ và H₂O.

Câu 57. Năng lượng liên kết (Eb) đặc trưng cho
A. độ bền của liên kết.
B. độ dài liên kết.
C. khối lượng liên kết.
D. màu sắc liên kết.

Câu 58. Khi hình thành liên kết mới, năng lượng sẽ
A. được giải phóng.
B. bị hấp thụ.
C. không đổi.
D. triệt tiêu.

Câu 59. Trong thí nghiệm nhiệt phân KClO₃, vai trò của MnO₂ là
A. Chất tham gia phản ứng.
B. Chất xúc tác.
C. Chất sản phẩm.
D. Chất chỉ thị màu.

Câu 60. Phản ứng nào sau đây làm lạnh môi trường xung quanh?
A. HCl + NaOH.
B. Đốt cồn.
C. NH₄NO₃ + Ba(OH)₂.8H₂O.
D. CaO + H₂O.

Câu 61. Cho ΔfH (kJ/mol): A (-100), B (-200), C (-50). Tính ΔrH cho A + B → 2C.
A. -200.
B. +200.
C. -100 + (-200) - 2(-50).
D. 2(-50) - [(-100) + (-200)].

Câu 62. Công thức ΔG = ΔH - TΔS, nhiệt độ T được tính theo đơn vị
A. Độ C.
B. Độ F.
C. Kelvin (K).
D. Độ Rankine.

Câu 63. Một phản ứng có ΔH = +50 kJ, ΔS = -100 J/K. Tại T = 298K, ΔG sẽ
A. Dương.
B. Âm.
C. Bằng 0.
D. Không xác định.

Câu 64. Khi nước lỏng hóa hơi, dấu của ΔH và ΔS là
A. ΔH > 0, ΔS > 0.
B. ΔH < 0, ΔS < 0.
C. ΔH > 0, ΔS < 0.
D. ΔH < 0, ΔS > 0.

Câu 65. Năng lượng hóa học chủ yếu được lưu trữ trong
A. hạt nhân nguyên tử.
B. các liên kết hóa học.
C. chuyển động nhiệt của phân tử.
D. lớp vỏ electron trong cùng.

Câu 66. Mối liên hệ giữa độ bền phân tử và năng lượng liên kết:
A. Năng lượng liên kết càng lớn, phân tử càng kém bền.
B. Năng lượng liên kết càng lớn, phân tử càng bền.
C. Không có mối liên hệ.
D. Năng lượng liên kết bằng 0 thì phân tử bền nhất.

Câu 67. Thí nghiệm nhiệt phân KClO₃, tàn đóm đỏ bùng cháy chứng tỏ sinh ra khí
A. H₂.
B. Cl₂.
C. O₂.
D. CO₂.

Câu 68. Phản ứng: H₂ (g) + Cl₂ (g) → 2HCl (g). Số liên kết H-H bị phá vỡ là
A. 1.
B. 2.
C. 3.
D. 4.

Câu 69. Phản ứng quang hợp của cây xanh là phản ứng
A. Tỏa nhiệt (nhờ ánh sáng).
B. Thu năng lượng (ánh sáng).
C. Không trao đổi năng lượng.
D. Phản ứng hạt nhân.

Câu 70. Ứng dụng nào sau đây KHÔNG dựa trên phản ứng tỏa nhiệt?
A. Chạy động cơ xe máy.
B. Nung vôi để làm vật liệu xây dựng.
C. Sưởi ấm bằng than.
D. Hàn đường ray.

Câu 71. Tính ΔrH phản ứng: 2NaCl → 2Na + Cl₂. Biết ΔfH(NaCl) = -411,2 kJ/mol.
A. -411,2 kJ.
B. +411,2 kJ.
C. +822,4 kJ.
D. -822,4 kJ.

Câu 72. Cho phản ứng: CH₄ + 2O₂ → CO₂ + 2H₂O. ΔfH(CH₄) = -74,8; ΔfH(CO₂) = -393,5; ΔfH(H₂O) = -285,8 (kJ/mol). Giá trị ΔrH là
A. -890,3 kJ.
B. -604,5 kJ.
C. +890,3 kJ.
D. +604,5 kJ.

Câu 73. Tính ΔrH cho: H₂ + Cl₂ → 2HCl. Biết Eb(H-H)=436, Eb(Cl-Cl)=243, Eb(H-Cl)=432 (kJ/mol).
A. -185 kJ.
B. +185 kJ.
C. -249 kJ.
D. +249 kJ.

Câu 74. Cho ΔrH phản ứng N₂ + O₂ → 2NO là +180 kJ. Nhiệt tạo thành chuẩn của NO là
A. +180 kJ/mol.
B. +90 kJ/mol.
C. -90 kJ/mol.
D. -180 kJ/mol.

Câu 75. Đốt cháy 1 mol Acetylene (C₂H₂) tỏa ra nhiều nhiệt hơn 1 mol Methane (CH₄). Điều này có nghĩa là
A. |ΔrH(C₂H₂)| > |ΔrH(CH₄)|.
B. |ΔrH(C₂H₂)| < |ΔrH(CH₄)|.
C. C₂H₂ bền hơn CH₄.
D. CH₄ cháy chậm hơn.

Câu 76. Trong phản ứng: CH₄ + Cl₂ → CH₃Cl + HCl. Tổng năng lượng liên kết chất đầu bao gồm
A. 4 Eb(C-H) + 1 Eb(Cl-Cl).
B. 3 Eb(C-H) + 1 Eb(Cl-Cl).
C. 1 Eb(C-H) + 1 Eb(Cl-Cl).
D. 4 Eb(C-H) + 1 Eb(H-Cl).

Câu 77. Để tính nhiệt tạo thành SiO₂ từ phản ứng SiO₂ + 2C → Si + 2CO (ΔrH = +689,9 kJ) và ΔfH(CO) = -110,5 kJ/mol. Ta dùng biểu thức
A. +689,9 = [2(-110,5)] - ΔfH(SiO₂).
B. +689,9 = ΔfH(SiO₂) - [2(-110,5)].
C. +689,9 = [-110,5] - ΔfH(SiO₂).
D. -689,9 = [2(-110,5)] + ΔfH(SiO₂).

Câu 78. Giá trị ΔfH₂₉₈⁰ của H₂O (l) là -285,8 kJ/mol. Nhiệt lượng tỏa ra khi tạo thành 2 mol nước lỏng là
A. 285,8 kJ.
B. 571,6 kJ.
C. 142,9 kJ.
D. 0 kJ.

Câu 79. Cho phản ứng A + B → C. ΔH = -50kJ. Nếu lấy 2A + 2B → 2C thì ΔH bằng
A. -50 kJ.
B. -25 kJ.
C. -100 kJ.
D. +100 kJ.

Câu 80. Nếu Eb(N≡N) = 945 kJ/mol và Eb(H-H) = 436 kJ/mol. Liên kết nào bền hơn?
A. N≡N.
B. H-H.
C. Bằng nhau.
D. Không so sánh được.

Câu 81. Tính ΔG cho phản ứng vôi sống hóa: CaCO₃ → CaO + CO₂. Biết ΔH=178,3 kJ, ΔS=160,6 J/K. Tại 298K. (Lưu ý đổi đơn vị).
A. +130,4 kJ.
B. -130,4 kJ.
C. +47,8 kJ.
D. +226,1 kJ.

Câu 82. Với kết quả ΔG ở câu 81, ở nhiệt độ thường (298K), phản ứng nung vôi
A. Tự xảy ra dễ dàng.
B. Không tự xảy ra.
C. Đạt cân bằng.
D. Xảy ra nổ.

Câu 83. Nhiệt độ T (Kelvin) để phản ứng bắt đầu xảy ra (ΔG = 0) được tính bằng
A. ΔH / ΔS.
B. ΔS / ΔH.
C. ΔH * ΔS.
D. ΔH - ΔS.

Câu 84. Khi tính toán theo năng lượng liên kết, sai lầm thường gặp nhất là
A. Tính sai khối lượng mol.
B. Nhầm lẫn lấy Sản phẩm trừ Chất đầu (ngược quy tắc Eb).
C. Quên cân bằng phương trình.
D. Cả B và C.

Câu 85. Phản ứng: C₂H₄ + H₂ → C₂H₆. Liên kết đôi C=C chuyển thành
A. Liên kết ba.
B. Liên kết đơn C-C.
C. Liên kết ion.
D. Không đổi.

Câu 86. Cho sơ đồ: A → B (ΔH1); B → C (ΔH2). Vậy A → C có ΔH là
A. ΔH1 - ΔH2.
B. ΔH1 * ΔH2.
C. ΔH1 + ΔH2.
D. ΔH1 / ΔH2.

Câu 87. Để tính nhiệt đốt cháy C₂H₂, biết nhiệt tạo thành của C₂H₂, CO₂, H₂O. Công thức đúng là
A. [2ΔfH(CO₂) + ΔfH(H₂O)] - ΔfH(C₂H₂).
B. ΔfH(C₂H₂) - [2ΔfH(CO₂) + ΔfH(H₂O)].
C. [ΔfH(CO₂) + ΔfH(H₂O)] - ΔfH(C₂H₂).
D. Tổng sản phẩm cộng chất đầu.

Câu 88. ΔfH₂₉₈⁰ (C graphite) bằng
A. 0.
B. -393,5.
C. +100.
D. Khác 0 vì C rắn.

Câu 89. Phản ứng thủy phân collagen thành gelatin là phản ứng
A. Tỏa nhiệt mạnh.
B. Thu nhiệt (cần đun nấu).
C. Không thay đổi nhiệt.
D. Phản ứng hạt nhân.

Câu 90. Nhiệt lượng tỏa ra từ phản ứng H₂ cháy lớn, sản phẩm là nước. Đây là cơ sở để nghiên cứu
A. Nhiên liệu hóa thạch.
B. Nhiên liệu Hydrogen sạch.
C. Năng lượng hạt nhân.
D. Năng lượng gió.

Câu 91. Dựa vào định luật Hess, nếu phản ứng thuận tỏa nhiệt 500 kJ thì phản ứng nghịch
A. Tỏa nhiệt 500 kJ.
B. Thu nhiệt 500 kJ.
C. Thu nhiệt 250 kJ.
D. Không xác định.

Câu 92. Tính nhiệt độ tối thiểu để phản ứng có ΔH = +100 kJ và ΔS = +200 J/K tự xảy ra.
A. 200 K.
B. 500 K.
C. 2000 K.
D. 0,5 K.

Câu 93. Nếu phản ứng có ΔH < 0 và ΔS < 0 (tỏa nhiệt, giảm độ hỗn loạn). Phản ứng sẽ thuận lợi ở
A. Nhiệt độ cao.
B. Nhiệt độ thấp.
C. Mọi nhiệt độ.
D. Không bao giờ.

Câu 94. Trong bài tập đốt cháy gas, thành phần chính là Propane và Butane. Phản ứng này là
A. Thu nhiệt ΔH > 0.
B. Tỏa nhiệt ΔH < 0.
C. ΔH = 0.
D. Không tạo ra CO₂.

Câu 95. Khi tính ΔH cho phản ứng tổng hợp NH₃: N₂ + 3H₂ → 2NH₃ dựa vào Eb. Số mol liên kết H-H cần tính là
A. 1.
B. 2.
C. 3.
D. 6.

Câu 96. Với phản ứng SiO₂ + 2C → Si + 2CO. Điều kiện nhiệt độ cao là bắt buộc vì
A. Phản ứng tỏa nhiệt.
B. Phản ứng có ΔH > 0 (thu nhiệt) và cần T lớn để TΔS thắng ΔH.
C. Cần làm nóng chảy Si.
D. Để C cháy trong O₂.

Câu 97. Một hệ phản ứng có ΔH = -200 kJ, T = 300K, ΔS = -100 J/K. Tính ΔG.
A. -170 kJ.
B. -230 kJ.
C. -200 - 300(-0,1) = -170 kJ.
D. -199,9 kJ.

Câu 98. Năng lượng giải phóng khi đốt cháy 1 mol chất được gọi là
A. Nhiệt tạo thành.
B. Nhiệt phân hủy.
C. Nhiệt đốt cháy.
D. Nhiệt dung.

Câu 99. Chọn phát biểu đúng về mối quan hệ giữa ΔH và độ bền liên kết.
A. Liên kết sản phẩm càng bền hơn chất đầu thì phản ứng càng tỏa nhiệt.
B. Liên kết sản phẩm càng bền hơn chất đầu thì phản ứng càng thu nhiệt.
C. Không liên quan.
D. Phản ứng luôn thu nhiệt khi tạo liên kết bền.

Câu 100. Trong thực tế, để tính chi phí gas đun sôi nước, ta cần biết
A. Nhiệt tỏa ra của gas và nhiệt dung của nước.
B. Chỉ cần giá tiền gas.
C. Chỉ cần khối lượng nước.
D. Nhiệt độ phòng.
`;

  const rawTF = `
Câu 1. Cho các phát biểu về phản ứng tỏa nhiệt:
a) Là phản ứng giải phóng năng lượng dưới dạng nhiệt.
b) Nhiệt độ môi trường xung quanh giảm đi.
c) ΔrH₂₉₈⁰ < 0.
d) Tổng năng lượng chất tham gia nhỏ hơn tổng năng lượng sản phẩm.

Câu 2. Cho các phát biểu về phản ứng thu nhiệt:
a) Cần cung cấp nhiệt liên tục để phản ứng xảy ra.
b) Nhiệt độ môi trường xung quanh nóng lên.
c) ΔrH₂₉₈⁰ > 0.
d) Ví dụ điển hình là phản ứng nung đá vôi.

Câu 3. Xét phản ứng CaO + H₂O → Ca(OH)₂:
a) Đây là phản ứng tôi vôi.
b) Phản ứng này làm lạnh cốc chứa.
c) Đây là phản ứng tỏa nhiệt mạnh.
d) Phản ứng này có ΔrH₂₉₈⁰ dương.

Câu 4. Xét phản ứng nhiệt phân KClO₃ có xúc tác MnO₂:
a) Cần dùng đèn cồn để đun nóng liên tục.
b) Phản ứng sinh ra khí Cl₂.
c) Đây là phản ứng thu nhiệt.
d) Khi ngừng đun, phản ứng vẫn tiếp tục xảy ra mạnh mẽ.

Câu 5. Về điều kiện chuẩn trong nhiệt hóa học:
a) Áp suất chất khí là 1 bar.
b) Nồng độ chất tan là 1 mol/L.
c) Nhiệt độ bắt buộc phải là 0 độ C.
d) Nhiệt tạo thành của đơn chất bền nhất bằng 0.

Câu 6. Về Enthalpy tạo thành chuẩn (ΔfH₂₉₈⁰):
a) Là nhiệt của phản ứng tạo thành 1 mol chất.
b) Chất được tạo thành từ các hợp chất khác.
c) Đơn vị thường là kJ/mol.
d) ΔfH₂₉₈⁰ của O₂(g) và N₂(g) đều bằng 0.

Câu 7. Về sơ đồ năng lượng:
a) Phản ứng tỏa nhiệt có đường năng lượng đi xuống.
b) Phản ứng thu nhiệt có mức năng lượng sản phẩm cao hơn chất đầu.
c) Khoảng cách giữa hai mức năng lượng chính là ΔrH.
d) Sơ đồ đi lên biểu diễn phản ứng cháy.

Câu 8. Xét phản ứng 2H₂ + O₂ → 2H₂O, ΔrH = -571,6 kJ:
a) Phản ứng tỏa nhiệt.
b) Nhiệt tạo thành chuẩn của H₂O(l) là -571,6 kJ/mol.
c) Nhiệt tạo thành chuẩn của H₂O(l) là -285,8 kJ/mol.
d) Phản ứng này làm môi trường nóng lên.

Câu 9. Về năng lượng liên kết (Eb):
a) Áp dụng cho chất ở mọi trạng thái (rắn, lỏng, khí).
b) ΔrH = Tổng Eb(chất đầu) - Tổng Eb(sản phẩm).
c) Năng lượng liên kết càng lớn, liên kết càng kém bền.
d) Sự phá vỡ liên kết luôn cần cung cấp năng lượng.

Câu 10. Về phản ứng hòa tan NH₄Cl vào nước:
a) Cốc nước trở nên lạnh hơn.
b) Đây là quá trình tỏa nhiệt.
c) Đây là quá trình thu nhiệt từ môi trường.
d) Năng lượng của dung dịch sau hòa tan thấp hơn ban đầu.

Câu 11. Ứng dụng thực tiễn của các phản ứng nhiệt:
a) Túi chườm nóng sử dụng phản ứng thu nhiệt.
b) Hàn đường ray dùng phản ứng nhiệt nhôm (tỏa nhiệt).
c) Đốt than cần quạt gió để cung cấp Oxygen.
d) Nung vôi là quá trình tỏa nhiệt để làm nóng lò.

Câu 12. Về dấu của biến thiên Enthalpy:
a) ΔrH < 0 là phản ứng tỏa nhiệt.
b) ΔrH > 0 là phản ứng thu nhiệt.
c) Đốt cháy xăng dầu có ΔrH > 0.
d) Quang hợp là quá trình có ΔrH > 0 (xét hệ phản ứng).

Câu 13. Định luật Hess:
a) Nhiệt phản ứng phụ thuộc vào đường đi của phản ứng.
b) Nhiệt phản ứng chỉ phụ thuộc trạng thái đầu và cuối.
c) Có thể cộng các phương trình nhiệt hóa học.
d) ΔH = ΔH₁ + ΔH₂ + ...

Câu 14. Về phản ứng N₂ + O₂ → 2NO (ΔrH = +180 kJ):
a) Phản ứng xảy ra dễ dàng ở nhiệt độ thường.
b) Phản ứng này thường xảy ra khi có sấm sét (nhiệt độ rất cao).
c) Nhiệt tạo thành chuẩn của NO là +90 kJ/mol.
d) Đây là phản ứng tỏa nhiệt.

Câu 15. Xét phản ứng nhiệt phân Cu(OH)₂:
a) Sản phẩm là CuO và H₂O.
b) Cần cung cấp nhiệt để phản ứng xảy ra.
c) Là phản ứng tỏa nhiệt.
d) Môi trường xung quanh sẽ nóng lên nhờ phản ứng này.

Câu 16. Entropy (S) và năng lượng Gibbs (G):
a) S đặc trưng cho độ hỗn loạn. S(khí) > S(lỏng).
b) ΔG dùng để dự đoán chiều phản ứng.
c) ΔG < 0 phản ứng tự xảy ra.
d) ΔG dương nghĩa là phản ứng xảy ra rất nhanh.

Câu 17. Cho công thức tính ΔrH = ΣΔfH(sp) - ΣΔfH(cd):
a) Công thức này đúng cho mọi phản ứng nếu biết nhiệt tạo thành.
b) Các hệ số trong phương trình hóa học có thể bỏ qua.
c) ΔfH của đơn chất phải được tính bằng 0.
d) Nếu kết quả âm, phản ứng là thu nhiệt.

Câu 18. Xét phản ứng đốt cháy 1 mol C₂H₂ và 1 mol CH₄:
a) Cả hai đều là phản ứng tỏa nhiệt.
b) CH₄ tỏa nhiều nhiệt hơn C₂H₂ (xét trên 1 mol).
c) Sản phẩm đều là CO₂ và H₂O.
d) Đây là các phản ứng oxy hóa khử.

Câu 19. Trong thí nghiệm cho vôi sống vào nước:
a) Khói bốc lên là khí CO₂.
b) Khói bốc lên là hơi nước do nhiệt độ tăng cao.
c) Cần dùng đũa thủy tinh khuấy nhẹ.
d) Không được chạm tay trực tiếp vào vôi sống.

Câu 20. (Thông hiểu) Phản ứng tổng hợp NH₃ từ N₂ và H₂:
a) Có phương trình N₂ + 3H₂ → 2NH₃.
b) Có 1 liên kết ba trong N₂ bị phá vỡ.
c) Có 3 liên kết đơn trong H₂ bị phá vỡ.
d) Tạo thành 6 liên kết N-H.

Câu 21. (Thông hiểu) Cho phản ứng A + B → C, ΔH = -100 kJ.
a) Phản ứng tỏa nhiệt.
b) Phản ứng 2A + 2B → 2C có ΔH = -200 kJ.
c) Phản ứng C → A + B có ΔH = -100 kJ.
d) Hệ sản phẩm C bền vững hơn hệ A+B về năng lượng.

Câu 22. (Thông hiểu) Về nhiệt tạo thành chuẩn ΔfH₂₉₈⁰ của CO₂:
a) Là biến thiên enthalpy của phản ứng C(graphite) + O₂(g) → CO₂(g).
b) Giá trị là -393,5 kJ/mol.
c) Đây cũng là nhiệt đốt cháy của Carbon.
d) Giá trị này dương vì cần nhiệt để đốt than.

Câu 23. (Thông hiểu) Khi tính ΔrH theo năng lượng liên kết cho phản ứng H₂ + Cl₂ → 2HCl:
a) Cần biết Eb(H-H), Eb(Cl-Cl) và Eb(H-Cl).
b) Công thức là [Eb(H-H) + Eb(Cl-Cl)] - 2Eb(H-Cl).
c) Kết quả thường là số dương.
d) Phản ứng này tỏa nhiệt.

Câu 24. (Thông hiểu) Về sự biến thiên Entropy ΔS:
a) Phản ứng rắn tạo ra khí thường có ΔS > 0.
b) Phản ứng khí hóa lỏng thường có ΔS < 0.
c) ΔS luôn dương cho mọi phản ứng.
d) ΔS càng lớn, hệ càng trật tự.

Câu 25.(Thông hiểu)  Phản ứng CaCO₃(s) → CaO(s) + CO₂(g):
a) ΔH > 0 (thu nhiệt).
b) ΔS > 0 (tăng độ hỗn loạn do sinh ra khí).
c) Ở nhiệt độ thường, phản ứng không tự xảy ra (ΔG > 0).
d) Ở nhiệt độ cao, phản ứng tự xảy ra (ΔG < 0).

Câu 26. (Thông hiểu) Về nhiên liệu Hydrogen:
a) Sản phẩm cháy là nước, không gây ô nhiễm.
b) Nhiệt lượng tỏa ra lớn.
c) Dễ dàng lưu trữ và vận chuyển hơn xăng dầu.
d) Là nguồn năng lượng tái tạo tiềm năng.

Câu 27. (Thông hiểu) Xét phản ứng tạo gỉ sắt: 4Fe + 3O₂ + xH₂O → 2Fe₂O₃.xH₂O:
a) Là phản ứng tỏa nhiệt.
b) Tốc độ phản ứng rất chậm nên khó cảm nhận sự thay đổi nhiệt độ ngay lập tức.
c) Là phản ứng thu nhiệt vì sắt bị ăn mòn.
d) Có sự tham gia của Oxygen không khí.

Câu 28. (Thông hiểu) Trong cơ thể người:
a) Phản ứng oxy hóa glucose là nguồn cung cấp nhiệt.
b) Đây là phản ứng tỏa nhiệt.
c) Giúp duy trì thân nhiệt ổn định.
d) Là phản ứng thu nhiệt để xây dựng tế bào.

Câu 29.(Thông hiểu)  So sánh nhiệt phản ứng của F₂ + H₂ và N₂ + H₂:
a) Liên kết F-F kém bền hơn N≡N.
b) Phản ứng với F₂ xảy ra mãnh liệt hơn.
c) Phản ứng với N₂ cần điều kiện nhiệt độ, áp suất, xúc tác khắt khe hơn.
d) Cả hai phản ứng đều thu nhiệt.

Câu 30.(Thông hiểu)  Cách tính ΔG = ΔH - TΔS:
a) T phải đổi sang Kelvin (K = độ C + 273).
b) Đơn vị của ΔH và TΔS phải đồng nhất (cùng là J hoặc kJ).
c) Nếu ΔH âm và ΔS dương, ΔG luôn âm (luôn tự xảy ra).
d) Nếu ΔH dương và ΔS âm, ΔG luôn dương (không bao giờ tự xảy ra).

Câu 31. (Vận dụng) Cho phản ứng 2CO + O₂ → 2CO₂:
a) Tổng ΔfH sản phẩm là 2 nhân với ΔfH(CO₂).
b) Tổng ΔfH chất đầu là 2 nhân với ΔfH(CO) cộng ΔfH(O₂).
c) ΔfH(O₂) = 0.
d) ΔrH = [2ΔfH(CO) + 0] - 2ΔfH(CO₂).

Câu 32.(Vận dụng)  Ứng dụng nhiệt hóa học trong đời sống:
a) Chọn nhiên liệu dựa trên nhiệt lượng tỏa ra.
b) Tính khẩu phần ăn dựa trên năng lượng cung cấp (Calo).
c) Thiết kế hệ thống làm mát cho động cơ.
d) Chỉ áp dụng trong phòng thí nghiệm, không có ý nghĩa thực tế.

Câu 33. (Vận dụng) Khi hòa tan H₂SO₄ đặc vào nước:
a) Là quá trình tỏa nhiệt rất mạnh.
b) Nước có thể sôi và bắn ra ngoài.
c) Phải đổ nước vào axit để an toàn.
d) Phải đổ từ từ axit vào nước.

Câu 34. (Vận dụng) Về sự phá vỡ và hình thành liên kết:
a) Phá vỡ liên kết H-H cần cung cấp 436 kJ/mol.
b) Hình thành liên kết H-H giải phóng 436 kJ/mol.
c) Nếu năng lượng phá vỡ nhỏ hơn năng lượng hình thành -> Tỏa nhiệt.
d) Nếu năng lượng phá vỡ lớn hơn năng lượng hình thành -> Tỏa nhiệt.

Câu 35.(Vận dụng)  Tính chất của Ice pack (túi chườm lạnh hóa học):
a) Bên trong thường chứa NH₄NO₃ và túi nước.
b) Khi bóp vỡ túi nước, NH₄NO₃ tan vào nước.
c) Quá trình hòa tan thu nhiệt làm lạnh túi.
d) Có thể tái sử dụng vô hạn lần bằng cách đun nóng.

Câu 36. (Vận dụng cao) Phương trình nhiệt hóa học: C₂H₅OH(l) + 3O₂(g) → 2CO₂(g) + 3H₂O(l) ΔrH = -1367 kJ.
a) Đốt cháy 1 mol ethanol tỏa ra 1367 kJ.
b) Đây là phản ứng thu nhiệt.
c) Ethanol là nhiên liệu sinh học.
d) Hệ số cân bằng của O₂ là 3.

Câu 37. (Vận dụng cao) Ảnh hưởng của nhiệt độ đến chiều phản ứng (theo Gibbs):
a) Khi T tăng, giá trị -TΔS càng âm (nếu ΔS > 0).
b) Nhiệt độ cao thuận lợi cho các phản ứng thu nhiệt có ΔS > 0.
c) Nhiệt độ thấp thuận lợi cho phản ứng tỏa nhiệt có ΔS < 0.
d) Nhiệt độ không ảnh hưởng đến dấu của ΔG.

Câu 38. (Vận dụng cao) Về đơn vị đo lường:
a) 1 cal = 4,184 J.
b) 1 kJ = 1000 J.
c) Nhiệt độ T trong công thức PV=nRT và Gibbs đều là Kelvin.
d) Áp suất chuẩn hiện nay là 1 atm (101325 Pa).

Câu 39.(Vận dụng cao)  Phản ứng: C(s) + H₂O(g) → CO(g) + H₂(g) (sản xuất khí than ướt):
a) Là phản ứng thu nhiệt.
b) Cần thực hiện ở nhiệt độ cao.
c) ΔS của phản ứng này dương (tăng số mol khí).
d) Ở nhiệt độ thường, phản ứng tự xảy ra mạnh.

Câu 40. (Vận dụng cao) Tổng kết chương Năng lượng hóa học:
a) Mọi phản ứng hóa học đều đi kèm sự biến đổi năng lượng.
b) ΔrH < 0 là dấu hiệu quan trọng của phản ứng tỏa nhiệt.
c) Năng lượng không tự sinh ra hay mất đi, chỉ chuyển từ dạng này sang dạng khác.
d) Chỉ có phản ứng cháy mới tỏa nhiệt.
`;

  const rawSA = `
MỨC ĐỘ: NHẬN BIẾT (30 CÂU)
Câu 1. Áp suất được chọn làm điều kiện chuẩn đối với chất khí là bao nhiêu bar?
Câu 2. Nhiệt độ thường được chọn làm điều kiện chuẩn để xác định biến thiên enthalpy là bao nhiêu Kelvin?
Câu 3. Nhiệt tạo thành chuẩn của các đơn chất ở dạng bền nhất bằng bao nhiêu kJ/mol?
Câu 4. Trong quy ước về dấu, phản ứng tỏa nhiệt có giá trị biến thiên enthalpy chuẩn DrH298(0) nhỏ hơn số nào?
Câu 5. Trong quy ước về dấu, phản ứng thu nhiệt có giá trị biến thiên enthalpy chuẩn DrH298(0) lớn hơn số nào?
Câu 6. Trong thí nghiệm 1, lượng nước cất được lấy vào cốc chịu nhiệt là bao nhiêu mL?
Câu 7. Trong thí nghiệm 1, khối lượng vôi sống CaO được thêm vào nước là bao nhiêu gam?
Câu 8. Nhiệt tạo thành chuẩn là biến thiên enthalpy của phản ứng tạo thành bao nhiêu mol chất?
Câu 9. Xác định số hiệu nguyên tử Z của nguyên tố Sodium.
Câu 10. Xác định số hiệu nguyên tử Z của nguyên tố Phosphorus.
Câu 11. Hệ số của chất khí Oxygen trong phương trình nhiệt hóa học đốt cháy 2 mol H2 tạo thành 2 mol H2O là bao nhiêu?
Câu 12. Có bao nhiêu phân lớp electron trong lớp M (n = 3)?
Câu 13. Lớp electron thứ 2 (n = 2) có tối đa bao nhiêu electron?
Câu 14. Trong sơ đồ năng lượng của phản ứng tỏa nhiệt, đường năng lượng đi theo hướng nào (Quy ước: Đi xuống chọn 1, Đi lên chọn 2)?
Câu 15. Trong sơ đồ năng lượng của phản ứng thu nhiệt, đường năng lượng đi theo hướng nào (Quy ước: Đi xuống chọn 1, Đi lên chọn 2)?
Câu 16. Xác định số hiệu nguyên tử Z của nguyên tố Lithium.
Câu 17. Xác định số hiệu nguyên tử Z của nguyên tố Chlorine.
Câu 18. Số nguyên tử hydrogen trong công thức hợp chất khí với hydrogen của nguyên tố nhóm IVA là bao nhiêu?
Câu 19. Hóa trị cao nhất của nguyên tố nhóm VA trong oxide cao nhất là bao nhiêu?
Câu 20. Nồng độ chất tan được chọn ở điều kiện chuẩn là bao nhiêu mol/L?
Câu 21. Entropy (S) là đại lượng đặc trưng cho mức độ hỗn loạn. Trạng thái nào có S thấp nhất (Quy ước: Rắn chọn 1, Lỏng chọn 2, Khí chọn 3)?
Câu 22. Trong phân tử Methane CH4 có bao nhiêu liên kết đơn C-H?
Câu 23. Trong phân tử Cl2 có bao nhiêu liên kết đơn Cl-Cl?
Câu 24. Số electron hóa trị của nguyên tố nhóm VIIA là bao nhiêu?
Câu 25. Ở điều kiện chuẩn, nhiệt độ 25 độ C tương ứng với bao nhiêu Kelvin?
Câu 26. Phản ứng tạo gỉ sắt là phản ứng tỏa nhiệt (Chọn 1) hay thu nhiệt (Chọn 2)?
Câu 27. Phản ứng nung vôi là phản ứng tỏa nhiệt (Chọn 1) hay thu nhiệt (Chọn 2)?
Câu 28. Khi hòa tan viên C sủi vào nước, môi trường xung quanh lạnh đi. Đây là phản ứng loại mấy (Quy ước: Tỏa nhiệt chọn 1, Thu nhiệt chọn 2)?
Câu 29. Khi đốt cháy cồn, môi trường xung quanh nóng lên. Đây là phản ứng loại mấy (Quy ước: Tỏa nhiệt chọn 1, Thu nhiệt chọn 2)?
Câu 30. Hệ số của CO2 trong phương trình đốt cháy hoàn toàn 1 mol CH4 là bao nhiêu?

Câu 31.(Thông hiểu)  Cho phản ứng: N2(g) + O2(g) -> 2NO(g) có DrH298(0) = +180 kJ. Tính nhiệt tạo thành chuẩn của khí NO theo kJ/mol.
Câu 32. (Thông hiểu) Tính biến thiên enthalpy chuẩn DrH298(0) của phản ứng: 2NaCl(s) -> 2Na(s) + Cl2(g). Biết nhiệt tạo thành chuẩn của NaCl(s) là -411,2 kJ/mol.
Câu 33.(Thông hiểu)  Cho phản ứng: 2H2(g) + O2(g) -> 2H2O(l) có DrH298(0) = -571,6 kJ. Nhiệt tạo thành chuẩn của nước lỏng H2O là bao nhiêu kJ/mol?
Câu 34. (Thông hiểu) Tính biến thiên năng lượng tự do Gibbs (DG) tại 298 K khi biết DH = 100 kJ và DS = 0,2 kJ/K.
Câu 35. (Thông hiểu) Một phản ứng có DrH298(0) = -890,3 kJ. Đây là phản ứng tỏa nhiệt (Chọn 1) hay thu nhiệt (Chọn 2)?
Câu 36. (Thông hiểu) Trong phản ứng CH4(g) + Cl2(g) -> CH3Cl(g) + HCl(g), tổng số liên kết đơn trong các chất tham gia là bao nhiêu?
Câu 37.(Thông hiểu)  Tổng hệ số tối giản của các chất trong phương trình nhiệt hóa học: 2H2(g) + O2(g) -> 2H2O(l) là bao nhiêu?
Câu 38. (Thông hiểu) Ở trạng thái cân bằng, biến thiên năng lượng tự do Gibbs (DG) bằng bao nhiêu?
Câu 39. (Thông hiểu) Tính giá trị của DrS298(0) cho phản ứng có tổng Entropy sản phẩm là 250 J/K và tổng Entropy chất đầu là 180 J/K.
Câu 40.(Thông hiểu)  Một hệ có nội năng U = 500 J, áp suất P = 1 bar, thể tích V = 2 m3. Tính giá trị Enthalpy H của hệ (Biết H = U + P.V, lấy P.V = 200 J).
Câu 41. (Thông hiểu) Hợp chất khí với hydrogen của Sulfur (nhóm VIA) có bao nhiêu nguyên tử hydrogen?
Câu 42. (Thông hiểu) Oxide cao nhất của nguyên tố nhóm IIA có bao nhiêu nguyên tử oxygen?
Câu 43. (Thông hiểu) Phản ứng phân hủy KClO3 cần cung cấp nhiệt liên tục. Nếu ngừng đun, phản ứng có tiếp tục xảy ra không (Quy ước: Có chọn 1, Không chọn 0)?
Câu 44. (Thông hiểu) Tính tổng nhiệt tạo thành chuẩn của các chất đầu trong phản ứng: CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l). Biết DfH298(0) của CH4 là -74,8 kJ/mol.
Câu 45. (Thông hiểu) Xác định số lượng nguyên tử Oxygen trong công thức oxide cao nhất của Phosphorus.

Câu 46.(Vận dụng)  Tính biến thiên enthalpy chuẩn DrH298(0) của phản ứng: CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l). Biết DfH298(0) (kJ/mol) của: CH4 = -74,8; CO2 = -393,5; H2O = -285,8.
Câu 47.(Vận dụng)  Tính DrH298(0) của phản ứng: CH4(g) + Cl2(g) -> CH3Cl(g) + HCl(g) dựa vào năng lượng liên kết Eb (kJ/mol): C-H (414); Cl-Cl (243); C-Cl (339); H-Cl (431).
Câu 48.(Vận dụng)  Đốt cháy hoàn toàn 2 mol khí Methane CH4(g) tỏa ra nhiệt lượng bao nhiêu kJ? (Biết DrH298(0) đốt cháy 1 mol CH4 là -890,3 kJ).
Câu 49.(Vận dụng)  Tính nhiệt tạo thành chuẩn của khí CO (kJ/mol) biết nhiệt phản ứng: SiO2 + 2C -> Si + 2CO là +689,9 kJ và nhiệt tạo thành chuẩn của SiO2 là -910,9 kJ/mol.
Câu 50. (Vận dụng) Cho phản ứng nung vôi: CaCO3(s) -> CaO(s) + CO2(g). Biết DfH298(0) (kJ/mol) của: CaO = -635,1; CO2 = -393,5; CaCO3 = -1206,9. Tính DrH298(0) của phản ứng.
Câu 51. (Vận dụng) Tính biến thiên Entropy chuẩn DrS298(0) (J/K) của phản ứng: CaCO3(s) -> CaO(s) + CO2(g). Biết S298(0) (J/mol.K) của: CaO = 38,2; CO2 = 213,7; CaCO3 = 91,3.
Câu 52. (Vận dụng) Dựa trên kết quả câu 50 và 51, tính biến thiên năng lượng tự do Gibbs DG (kJ) của phản ứng nung vôi ở 298 K. (Làm tròn đến 1 chữ số thập phân).
Câu 53. (Vận dụng) Tính nhiệt lượng tỏa ra (kJ) khi tạo thành 9 gam nước lỏng từ đơn chất. Biết DfH298(0) của H2O(l) là -285,8 kJ/mol và khối lượng mol của H2O là 18 g/mol.
Câu 54. (Vận dụng) Phản ứng đốt cháy 1 mol Ethyl alcohol tỏa ra 1367 kJ. Tính nhiệt lượng tỏa ra khi đốt cháy 4,6 gam alcohol này (Biết M = 46 g/mol).
Câu 55. (Vận dụng) Cho cấu hình electron của nguyên tố X là 1s2 2s2 2p6 3s2 3p4. Xác định số hiệu nguyên tử Z của X.

Câu 56.(Vận dụng cao)  Xác định nhiệt độ tối thiểu (theo Kelvin) để phản ứng nung vôi CaCO3(s) -> CaO(s) + CO2(g) bắt đầu tự xảy ra. Biết DH = 178,3 kJ và DS = 160,6 J/K. (Lấy DG = 0, làm tròn đến số nguyên).
Câu 57. (Vận dụng cao) Tính nhiệt tạo thành chuẩn của C2H2(g) biết phản ứng đốt cháy 1 mol C2H2 tỏa ra 1299,8 kJ. Biết DfH298(0) (kJ/mol) của: CO2 = -393,5; H2O = -285,8.
Câu 58. (Vận dụng cao) Tính biến thiên enthalpy chuẩn của phản ứng đốt cháy 1 mol khí gas hóa lỏng chứa 100% Propane (C3H8). Biết DfH298(0) (kJ/mol): C3H8 = -105,0; CO2 = -393,5; H2O = -285,8.
Câu 59. (Vận dụng cao) Một túi chườm nóng chứa hỗn hợp Fe và O2. Khi phản ứng tạo ra 1 mol Fe2O3 tỏa ra 824,2 kJ. Tính nhiệt lượng tỏa ra (kJ) khi có 11,2 gam Fe phản ứng hoàn toàn (M của Fe = 56).
Câu 60.(Vận dụng cao)  Xác định nhiệt độ Kelvin mà tại đó phản ứng SiO2(s) + 2C(s) -> Si(s) + 2CO(g) bắt đầu xảy ra. Biết DH = 689,9 kJ và DS = 360,8 J/K. (Làm tròn đến số nguyên).
`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "B,A,C,A,B,B,B,C,B,A,C,B,B,C,C,B,B,B,B,B,B,C,B,C,C,B,A,B,C,B,C,A,C,C,B,B,C,A,B,C,C,A,B,B,B,B,B,B,B,C,D,B,B,B,B,A,A,B,B,C,D,B,C,B,A,B,B,C,A,B,B,C,A,A,B,A,A,B,A,B,A,B,A,C,B,A,A,D,B,C,A,B,B,B,C,B,A,C,A,A".split(
      ",",
    );
  const ansTFList = [
    "ĐSĐS",
    "ĐSĐĐ",
    "ĐSĐS",
    "ĐSĐS",
    "ĐĐSĐ",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐSĐĐ",
    "SĐSĐ",
    "ĐSĐS",
    "SĐĐS",
    "ĐĐSĐ",
    "SĐĐĐ",
    "SĐĐS",
    "ĐĐSS",
    "ĐĐĐS",
    "ĐSĐS",
    "ĐSĐĐ",
    "SĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐSS",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐSĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
  ];
  const ansSAList =
    "1|298|0|0|0|25|5|1|11|15|1|3|8|1|2|3|17|4|5|1|1|4|1|7|298|1|2|2|1|1|90|822,4|-285,8|40|1|5|5|0|70|700|2|1|0|-74,8|5|-890,3|-113|1780,6|-110,5|178,3|160,6|130,4|142,9|136,7|16|1110|227|-2220,5|82,42|1912".split(
      "|",
    );

  // Hàm phân loại Level (dựa vào từ khóa hoặc theo chỉ số như yêu cầu)
  const getLevel = (text, idx, type) => {
    if (text.includes("(Thông hiểu)")) return "thonghieu";
    if (text.includes("(Vận dụng cao)")) return "vandungcao";
    if (text.includes("(Vận dụng)")) return "vandung";
    if (type === "mcq")
      return idx < 40
        ? "nhanbiet"
        : idx < 70
          ? "thonghieu"
          : idx < 90
            ? "vandung"
            : "vandungcao";
    if (type === "tf")
      return idx < 20
        ? "nhanbiet"
        : idx < 30
          ? "thonghieu"
          : idx < 35
            ? "vandung"
            : "vandungcao";
    if (type === "sa")
      return idx < 30
        ? "nhanbiet"
        : idx < 45
          ? "thonghieu"
          : idx < 55
            ? "vandung"
            : "vandungcao";
    return "nhanbiet";
  };

  const clean = (t) =>
    t.replace(/\(Thông hiểu\)|\(Vận dụng cao\)|\(Vận dụng\)/g, "").trim();

  // Parser MCQ
  let multipleChoice = [];
  rawMCQ
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let lines = block
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l);
      let qText = lines[0];
      let options = lines.slice(1, 5).map((l) => l.substring(3).trim());
      let correctIdx = ["A", "B", "C", "D"].indexOf(ansMCQList[idx]);
      multipleChoice.push({
        id: `mcq_${idx + 1}`,
        q: clean(qText),
        opts: options,
        ansText: options[correctIdx], // Lưu chuỗi chuẩn xác thay vì index vì sẽ shuffle array opts
        lvl: getLevel(qText, idx, "mcq"),
      });
    });

  // Parser TF
  let trueFalse = [];
  rawTF
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let lines = block
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l);
      let qText = lines[0];
      let stmts = lines.slice(1, 5).map((l) => l.substring(2).trim());
      let ans = ansTFList[idx];
      trueFalse.push({
        id: `tf_${idx + 1}`,
        q: clean(qText),
        stmts: stmts.map((s, i) => ({ text: s, ans: ans[i] })),
        lvl: getLevel(qText, idx, "tf"),
      });
    });

  // Parser SA
  let shortAnswer = [];
  rawSA
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let qText = block.trim().replace(/\n/g, " ");
      shortAnswer.push({
        id: `sa_${idx + 1}`,
        q: clean(qText),
        ans: ansSAList[idx],
        lvl: getLevel(qText, idx, "sa"),
      });
    });

  return { multipleChoice, trueFalse, shortAnswer };
})();

/**
 * BƯỚC 2: CORE LOGIC & STATE
 */
let selectedExam = { p1: [], p2: [], p3: [] };
let userAnswers = {}; // Lưu đáp án người dùng
let isSubmitted = false;

// Hàm shuffle mảng (Fisher-Yates)
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Lấy ngẫu nhiên câu hỏi theo cấu trúc Level yêu cầu
function getQuestionsByRatio(sourceArray, total, ratios) {
  let result = [];
  const counts = {
    nb: Math.round(total * ratios.nb),
    th: Math.round(total * ratios.th),
    vd: Math.round(total * ratios.vd),
    vdc: Math.round(total * ratios.vdc),
  };

  // Đảm bảo tổng số lượng khớp tuyệt đối bằng cách điều chỉnh phần dư
  let sum = counts.nb + counts.th + counts.vd + counts.vdc;
  while (sum < total) {
    counts.nb++;
    sum++;
  }
  while (sum > total) {
    counts.nb--;
    sum--;
  }

  const pick = (level, count) => {
    let pool = sourceArray.filter((q) => q.lvl === level);
    pool = shuffle(pool);
    return pool.slice(0, count);
  };

  result = result.concat(pick("nhanbiet", counts.nb));
  result = result.concat(pick("thonghieu", counts.th));
  result = result.concat(pick("vandung", counts.vd));
  result = result.concat(pick("vandungcao", counts.vdc));

  return shuffle(result); // Shuffle lần cuối để không theo thứ tự độ khó
}

// Khởi tạo bài thi mới
function initExam() {
  // Tỉ lệ: 50%, 30%, 15%, 5%
  const ratio = { nb: 0.5, th: 0.3, vd: 0.15, vdc: 0.05 };

  selectedExam.p1 = getQuestionsByRatio(data.multipleChoice, 16, ratio);
  selectedExam.p2 = getQuestionsByRatio(data.trueFalse, 4, ratio);
  selectedExam.p3 = getQuestionsByRatio(data.shortAnswer, 4, ratio);

  renderUI();
}

/**
 * BƯỚC 3: RENDER GIAO DIỆN
 */
function renderUI() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  let globalQIndex = 1;
  let navHTML = { p1: "", p2: "", p3: "" };

  // --- RENDER PHẦN 1 ---
  container.innerHTML += `<div class="part-header">Phần 1: Trắc Nghiệm Nhiều Phương Án (16 câu)</div>`;
  selectedExam.p1.forEach((q, idx) => {
    let opts = shuffle(q.opts); // Random thứ tự A B C D
    let labels = ["A", "B", "C", "D"];

    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <div class="options-list">`;

    opts.forEach((opt, i) => {
      html += `
                <label class="option-item" id="lbl-${globalQIndex}-${i}">
                    <input type="radio" name="p1_${globalQIndex}" value="${opt}" onchange="markAnswered(${globalQIndex})">
                    <b>${labels[i]}.</b> ${opt}
                </label>`;
    });

    html += `</div>
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: <b>${q.ansText}</b></div>
        </div>`;
    container.innerHTML += html;
    navHTML.p1 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    // Lưu data tham chiếu ngầm để chấm điểm
    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // --- RENDER PHẦN 2 ---
  container.innerHTML += `<div class="part-header">Phần 2: Trắc Nghiệm Đúng / Sai (4 câu)</div>`;
  selectedExam.p2.forEach((q, idx) => {
    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <table class="tf-table">
                <tr><th>Phát biểu</th><th>Đúng</th><th>Sai</th></tr>`;

    q.stmts.forEach((stmt, i) => {
      let label = String.fromCharCode(97 + i); // a, b, c, d
      html += `
                <tr>
                    <td id="tf-lbl-${globalQIndex}-${i}"><b>${label})</b> ${stmt.text}</td>
                    <td><input type="radio" class="tf-radio" name="p2_${globalQIndex}_${i}" value="Đ" onchange="markAnswered(${globalQIndex})"></td>
                    <td><input type="radio" class="tf-radio" name="p2_${globalQIndex}_${i}" value="S" onchange="markAnswered(${globalQIndex})"></td>
                </tr>`;
    });

    html += `</table>
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: ${q.stmts.map((s) => s.ans).join(" - ")}</div>
        </div>`;
    container.innerHTML += html;
    navHTML.p2 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // --- RENDER PHẦN 3 ---
  container.innerHTML += `<div class="part-header">Phần 3: Trắc Nghiệm Trả Lời Ngắn (4 câu)</div>`;
  selectedExam.p3.forEach((q, idx) => {
    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <input type="text" class="sa-input" id="sa-input-${globalQIndex}" placeholder="Nhập câu trả lời của bạn..." oninput="markAnswered(${globalQIndex})">
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: <b>${q.ans}</b></div>
        </div>`;
    container.innerHTML += html;
    navHTML.p3 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // Gắn Nav
  document.getElementById("nav-p1").innerHTML = navHTML.p1;
  document.getElementById("nav-p2").innerHTML = navHTML.p2;
  document.getElementById("nav-p3").innerHTML = navHTML.p3;

  setupScrollSpy();
}

/**
 * BƯỚC 4: TƯƠNG TÁC UX/UI
 */
function scrollToQ(id) {
  document
    .getElementById(`q-block-${id}`)
    .scrollIntoView({ behavior: "smooth", block: "center" });
}

function markAnswered(id) {
  if (isSubmitted) return;

  // Kiểm tra xem đã điền đủ chưa (Đặc biệt cho P2 cần chọn đủ 4 ý)
  let isFullyAnswered = true;

  if (id <= 16) {
    // P1
    let checked = document.querySelector(`input[name="p1_${id}"]:checked`);
    if (!checked) isFullyAnswered = false;
  } else if (id <= 20) {
    // P2
    for (let i = 0; i < 4; i++) {
      if (!document.querySelector(`input[name="p2_${id}_${i}"]:checked`)) {
        isFullyAnswered = false;
        break;
      }
    }
  } else {
    // P3
    let val = document.getElementById(`sa-input-${id}`).value.trim();
    if (val === "") isFullyAnswered = false;
  }

  const navBtn = document.getElementById(`nav-${id}`);
  if (isFullyAnswered) {
    navBtn.classList.add("answered");
  } else {
    navBtn.classList.remove("answered");
  }
}

// Theo dõi cuộn trang để highlight nút Navigation (Vàng)
function setupScrollSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Xóa active cũ
          document
            .querySelectorAll(".nav-btn")
            .forEach((btn) => btn.classList.remove("active"));
          // Thêm active mới
          let id = entry.target.id.split("-")[2];
          document.getElementById(`nav-${id}`).classList.add("active");
        }
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
  );

  document
    .querySelectorAll(".question-card")
    .forEach((card) => observer.observe(card));
}

/**
 * BƯỚC 5: CHẤM ĐIỂM (Logic lõi khắt khe)
 */
// Hàm so sánh chuỗi số (chấp nhận sai số +-0.01)
function compareSA(userAns, trueAns) {
  userAns = userAns.replace(/,/g, ".").trim().toLowerCase();
  trueAns = trueAns.replace(/,/g, ".").trim().toLowerCase();

  let uNum = parseFloat(userAns);
  let tNum = parseFloat(trueAns);

  if (!isNaN(uNum) && !isNaN(tNum)) {
    return Math.abs(uNum - tNum) <= 0.01;
  }
  return userAns === trueAns;
}

function submitQuiz() {
  if (isSubmitted) return;
  if (!confirm("Bạn có chắc chắn muốn nộp bài?")) return;

  isSubmitted = true;
  document.getElementById("btn-submit").style.display = "none";

  let scoreP1 = 0;
  let scoreP2 = 0;
  let scoreP3 = 0;

  // Chấm P1
  selectedExam.p1.forEach((q) => {
    let id = q.renderId;
    let checked = document.querySelector(`input[name="p1_${id}"]:checked`);
    let isCorrect = false;

    if (checked && checked.value === q.ansText) {
      scoreP1 += 0.25;
      isCorrect = true;
      checked.parentElement.classList.add("correct-ans");
    } else if (checked) {
      checked.parentElement.classList.add("wrong-ans");
    }

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${isCorrect ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Chấm P2
  selectedExam.p2.forEach((q) => {
    let id = q.renderId;
    let correctCount = 0;

    q.stmts.forEach((stmt, i) => {
      let checked = document.querySelector(
        `input[name="p2_${id}_${i}"]:checked`,
      );
      let tdObj = document.getElementById(`tf-lbl-${id}-${i}`);

      if (checked && checked.value === stmt.ans) {
        correctCount++;
        tdObj.classList.add("correct-ans");
      } else if (checked) {
        tdObj.classList.add("wrong-ans");
      } else {
        tdObj.classList.add("wrong-ans"); // Không tick coi như sai
      }
    });

    if (correctCount === 1) scoreP2 += 0.1;
    else if (correctCount === 2) scoreP2 += 0.25;
    else if (correctCount === 3) scoreP2 += 0.5;
    else if (correctCount === 4) scoreP2 += 1.0;

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${correctCount === 4 ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Chấm P3
  selectedExam.p3.forEach((q) => {
    let id = q.renderId;
    let inputObj = document.getElementById(`sa-input-${id}`);
    let userVal = inputObj.value;
    let isCorrect = compareSA(userVal, q.ans);

    if (isCorrect) {
      scoreP3 += 0.5;
      inputObj.classList.add("correct-ans");
    } else {
      inputObj.classList.add("wrong-ans");
    }

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${isCorrect ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Khóa form
  document.querySelectorAll("input").forEach((i) => (i.disabled = true));

  // Hiển thị điểm
  let total = scoreP1 + scoreP2 + scoreP3;
  document.getElementById("score-p1").innerText = scoreP1.toFixed(2);
  document.getElementById("score-p2").innerText = scoreP2.toFixed(2);
  document.getElementById("score-p3").innerText = scoreP3.toFixed(2);
  document.getElementById("total-score").innerText = `${total.toFixed(2)} / 10`;
  document.getElementById("result-panel").style.display = "block";

  // Cuộn lên đầu xem kết quả
  document.querySelector(".sidebar").scrollTo({ top: 0, behavior: "smooth" });
}

// Chạy ngay khi mở file
window.onload = initExam;
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
}
