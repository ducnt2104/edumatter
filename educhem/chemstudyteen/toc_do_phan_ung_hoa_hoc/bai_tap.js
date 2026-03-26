const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `
Câu 1. Nguyên tử là hạt vô cùng nhỏ và có tính chất nào sau đây?
A. Mang điện tích dương
B. Mang điện tích âm
C. Trung hòa về điện
D. Không có khối lượng
Câu 2. Nguyên tử được cấu tạo bởi hai phần chính là gì?
A. Electron và neutron
B. Proton và electron
C. Hạt nhân và lớp vỏ electron
D. Proton và neutron
Câu 3. Hạt nhân nguyên tử nằm ở vị trí nào?
A. Chuyển động xung quanh nguyên tử
B. Nằm ở tâm nguyên tử
C. Nằm ở lớp vỏ nguyên tử
D. Phân bố đều trong toàn bộ nguyên tử
Câu 4. Hạt proton mang điện tích gì?
A. Điện tích dương (+1)
B. Điện tích âm (-1)
C. Không mang điện
D. Điện tích dương (+2)
Câu 5. Hạt neutron có đặc điểm gì về điện tích?
A. Mang điện tích dương
B. Mang điện tích âm
C. Không mang điện
D. Mang điện tích biến đổi
Câu 6. Khối lượng của một hạt proton xấp xỉ bằng bao nhiêu amu?
A. 0,00055 amu
B. 1 amu
C. 12 amu
D. 18 amu
Câu 7. Trong nguyên tử, loại hạt nào chuyển động trong không gian xung quanh hạt nhân?
A. Proton
B. Neutron
C. Electron
D. Hạt alpha
Câu 8. Khối lượng của electron xấp xỉ bao nhiêu amu?
A. 1 amu
B. 0,00055 amu
C. 12 amu
D. 0,5 amu
Câu 9. Nguyên tử Hydrogen (H-1) đặc biệt ở chỗ hạt nhân của nó thiếu loại hạt nào?
A. Proton
B. Electron
C. Neutron
D. Cả proton và neutron
Câu 10. Trong một nguyên tử trung hòa về điện, điều nào sau đây luôn đúng?
A. Số proton bằng số neutron
B. Số proton bằng số electron
C. Số neutron bằng số electron
D. Số khối bằng số electron
Câu 11. Theo mô hình mô tả, nếu hạt nhân là quả bóng tennis thì nguyên tử có kích thước như thế nào?
A. Như một quả bóng bàn
B. Như một ngôi nhà
C. Như một sân vận động
D. Như một thành phố
Câu 12. Nhà bác học nào đã tìm ra electron vào năm 1897?
A. E. Rutherford
B. J.J. Thomson
C. N. Bohr
D. Millikan
Câu 13. Tia âm cực trong thí nghiệm của Thomson có đặc điểm gì?
A. Đi từ cực dương sang cực âm
B. Bị lệch về phía cực âm của điện trường
C. Bị lệch về phía cực dương của điện trường
D. Không bị lệch trong điện trường
Câu 14. Thí nghiệm tìm ra hạt nhân nguyên tử do ai thực hiện?
A. J.J. Thomson
B. E. Rutherford
C. Mendeleev
D. Millikan
Câu 15. Trong thí nghiệm của Rutherford, ông đã bắn phá lá vàng mỏng bằng hạt gì?
A. Hạt beta
B. Hạt proton
C. Hạt alpha
D. Hạt neutron
Câu 16. Kết quả thí nghiệm Rutherford cho thấy hầu hết các hạt alpha đi như thế nào?
A. Đi thẳng
B. Bị bật ngược lại hoàn toàn
C. Bị lệch hướng lớn
D. Dừng lại tại lá vàng
Câu 17. 1 amu bằng bao nhiêu phần khối lượng của nguyên tử carbon-12?
A. 1/10
B. 1/12
C. 1/16
D. 1/2
Câu 18. Đường kính nguyên tử lớn gấp khoảng bao nhiêu lần đường kính hạt nhân?
A. 100 lần
B. 1.000 lần
C. 10.000 lần
D. 1.000.000 lần
Câu 19. Đơn vị angstrom (A) có giá trị bằng bao nhiêu mét?
A. 10 mũ -9 m
B. 10 mũ -10 m
C. 10 mũ -6 m
D. 10 mũ -12 m
Câu 20. Số đơn vị điện tích hạt nhân kí hiệu là gì?
A. A
B. N
C. Z
D. M
Câu 21. Số khối (A) được tính bằng công thức nào?
A. A = Z + e
B. A = Z + N
C. A = p + e
D. A = N + e
Câu 22. Nguyên tố hóa học là tập hợp các nguyên tử có cùng:
A. Số neutron
B. Số khối
C. Điện tích hạt nhân
D. Số electron hóa trị
Câu 23. Kí hiệu nguyên tử được viết như thế nào (với X là kí hiệu hóa học)?
A. A ở trên, Z ở dưới bên trái X
B. Z ở trên, A ở dưới bên trái X
C. A ở trên, Z ở dưới bên phải X
D. A và Z cùng nằm bên trái ngang hàng
Câu 24. Đồng vị là những nguyên tử có cùng số proton nhưng khác nhau về:
A. Số electron
B. Số neutron
C. Cấu hình electron
D. Tính chất hóa học
Câu 25. Nguyên tử khối trung bình được sử dụng vì lí do nào?
A. Các nguyên tử có khối lượng biến đổi
B. Một nguyên tố thường có nhiều đồng vị trong tự nhiên
C. Do sai số thực nghiệm
D. Do sự chuyển động của electron
Câu 26. Orbital nguyên tử (AO) là khu vực không gian có xác suất tìm thấy electron khoảng bao nhiêu?
A. 100%
B. 90%
C. 50%
D. 10%
Câu 27. AO s có hình dạng gì?
A. Hình số tám nổi
B. Hình cầu
C. Hình cánh hoa
D. Hình lục giác
Câu 28. AO p có dạng hình gì?
A. Hình cầu
B. Hình vuông
C. Hình số tám nổi
D. Hình tam giác
Câu 29. Lớp electron thứ 2 được kí hiệu là tên lớp gì?
A. K
B. L
C. M
D. N
Câu 30. Số electron tối đa trong phân lớp s là bao nhiêu?
A. 2
B. 6
C. 10
D. 14
Câu 31. Số electron tối đa trong phân lớp p là bao nhiêu?
A. 2
B. 6
C. 10
D. 14
Câu 32. Số electron tối đa trong lớp n = 2 là bao nhiêu?
A. 2
B. 8
C. 18
D. 32
Câu 33. Nguyên lí Pauli phát biểu rằng mỗi AO chứa tối đa bao nhiêu electron?
A. 1 electron
B. 2 electron
C. 3 electron
D. 4 electron
Câu 34. Theo quy tắc Hund, trong một phân lớp chưa bão hòa, các electron phân bố sao cho:
A. Số electron ghép đôi là tối đa
B. Số electron độc thân là tối đa
C. Tổng năng lượng là cao nhất
D. Các electron dồn hết vào một AO
Câu 35. Các electron ở lớp ngoài cùng quyết định tính chất gì của nguyên tố?
A. Tính chất vật lí
B. Tính chất hóa học
C. Khối lượng nguyên tử
D. Kích thước nguyên tử
Câu 36. Nếu lớp ngoài cùng có 8 electron (trừ He), nguyên tố đó là:
A. Kim loại
B. Phi kim
C. Khí hiếm
D. Chất bán dẫn
Câu 37. Lớp M ứng với giá trị n bằng bao nhiêu?
A. n = 1
B. n = 2
C. n = 3
D. n = 4
Câu 38. Điện tích của electron được kí hiệu là gì?
A. qe
B. qp
C. qn
D. qA
Câu 39. Hạt nào có khối lượng xấp xỉ 1,675 x 10 mũ -24 g?
A. Electron
B. Proton
C. Neutron
D. Hạt nhân
Câu 40. Một nguyên tử có 11 proton, số electron của nó là bao nhiêu?
A. 10
B. 11
C. 12
D. 23
Câu 41. (Thông hiểu) Tại sao nồng độ HCl cao hơn làm tăng tốc độ phản ứng với Mg?
A. Làm giảm năng lượng hoạt hóa.
B. Làm tăng tần số va chạm hiệu quả.
C. Làm tăng diện tích bề mặt Mg.
D. Làm tăng nhiệt độ dung dịch.

Câu 42. (Thông hiểu) Tăng áp suất khí tương đương với việc
A. Giảm nhiệt độ của hệ.
B. Tăng nồng độ hạt (nén vào thể tích nhỏ hơn).
C. Tăng thể tích của hệ.
D. Giảm số lượng va chạm.

Câu 43. (Thông hiểu) Tại sao chẻ nhỏ củi giúp lửa cháy to hơn?
A. Tăng nồng độ Oxygen.
B. Tăng nhiệt độ ngọn lửa.
C. Tăng diện tích bề mặt tiếp xúc của củi.
D. Giảm áp suất không khí.

Câu 44. (Thông hiểu) Nhiệt độ tăng làm tăng tốc độ phản ứng chủ yếu do
A. Tăng số lượng hạt.
B. Tăng tỉ lệ hạt có năng lượng đủ lớn (vượt Ea).
C. Giảm khoảng cách giữa các hạt.
D. Làm mềm chất tham gia.

Câu 45. (Thông hiểu) Trong phản ứng 2N2O5 -> 4NO2 + O2, tốc độ trung bình tính theo O2 bằng
A. 2 lần tốc độ tính theo N2O5.
B. 1/2 tốc độ tính theo N2O5.
C. 4 lần tốc độ tính theo NO2.
D. Tốc độ tính theo NO2.

Câu 46. (Thông hiểu) Phản ứng nào sau đây là phản ứng đơn giản aA + bB -> cC?
A. Biểu thức tốc độ v = k.CA.CB.
B. Biểu thức tốc độ v = k.CA^a.CB^b.
C. Phản ứng xảy ra qua nhiều giai đoạn.
D. Phản ứng có xúc tác ezym.

Câu 47. (Thông hiểu) Trong thí nghiệm CaCO3 + HCl, ống nghiệm chứa CaCO3 dạng bột phản ứng nhanh hơn dạng viên vì
A. Dạng bột có khối lượng nhỏ hơn.
B. Dạng bột có diện tích bề mặt lớn hơn.
C. Dạng bột tinh khiết hơn.
D. Dạng bột làm tăng nồng độ HCl.

Câu 48. (Thông hiểu) Đồ thị biểu diễn nồng độ chất phản ứng theo thời gian có dạng
A. Đường thẳng đi lên.
B. Đường cong đi xuống.
C. Đường nằm ngang.
D. Đường cong đi lên.

Câu 49. (Thông hiểu) Hiện tượng tàn đốm đỏ bùng cháy trong thí nghiệm H2O2 chứng tỏ
A. Phản ứng sinh ra khí Hydrogen.
B. Phản ứng sinh ra khí Oxygen.
C. Phản ứng tỏa nhiệt mạnh.
D. Phản ứng cần ánh sáng.

Câu 50. (Thông hiểu) Nếu hệ số nhiệt độ gamma = 2, khi tăng nhiệt độ thêm 10 độ C, tốc độ phản ứng sẽ
A. Tăng gấp đôi.
B. Giảm một nửa.
C. Tăng gấp 4 lần.
D. Không đổi.

Câu 51. (Thông hiểu) Nếu hệ số nhiệt độ gamma = 3, khi tăng nhiệt độ thêm 20 độ C, tốc độ phản ứng sẽ
A. Tăng 3 lần.
B. Tăng 6 lần.
C. Tăng 9 lần.
D. Tăng 27 lần.

Câu 52. (Thông hiểu) Chất xúc tác làm thay đổi cơ chế phản ứng bằng cách
A. Tạo ra con đường phản ứng mới có Ea cao hơn.
B. Tạo ra con đường phản ứng mới có Ea thấp hơn.
C. Tăng nhiệt độ phản ứng cục bộ.
D. Tăng nồng độ chất phản ứng.

Câu 53. (Thông hiểu) Trong biểu thức v = k.CA^a.CB^b, nếu nồng độ A tăng gấp đôi (với a=1), tốc độ phản ứng sẽ
A. Tăng gấp đôi.
B. Tăng gấp 4.
C. Không đổi.
D. Giảm một nửa.

Câu 54. (Thông hiểu) Trong biểu thức v = k.CA^a.CB^b, nếu nồng độ A tăng gấp đôi (với a=2), tốc độ phản ứng sẽ
A. Tăng gấp đôi.
B. Tăng gấp 4.
C. Tăng gấp 8.
D. Không đổi.

Câu 55. (Thông hiểu) Tại sao phải nhai kĩ thức ăn?
A. Để thức ăn ngon hơn.
B. Để tăng diện tích bề mặt tiếp xúc với enzyme tiêu hóa.
C. Để giảm nhiệt độ thức ăn.
D. Để loại bỏ độc tố.

Câu 56. (Thông hiểu) Phản ứng tổng hợp NH3 dùng chất xúc tác là
A. V2O5.
B. Bột sắt (Fe).
C. MnO2.
D. Pt.

Câu 57. (Thông hiểu) Trong công thức tính tốc độ trung bình, delta t là
A. Thời điểm kết thúc.
B. Thời điểm bắt đầu.
C. Biến thiên thời gian (t2 - t1).
D. Tổng thời gian.

Câu 58. (Thông hiểu) Trong công thức tính tốc độ trung bình, delta C là
A. Tổng nồng độ.
B. Tích nồng độ.
C. Biến thiên nồng độ (C2 - C1).
D. Nồng độ trung bình.

Câu 59. (Thông hiểu) Với phản ứng A -> B, nếu tính tốc độ theo chất phản ứng A thì công thức là
A. v = (C2 - C1) / (t2 - t1).
B. v = - (C2 - C1) / (t2 - t1).
C. v = C2 / t2.
D. v = C1 / t1.

Câu 60. (Thông hiểu) Với phản ứng A -> B, nếu tính tốc độ theo chất sản phẩm B thì công thức là
A. v = (C2 - C1) / (t2 - t1).
B. v = - (C2 - C1) / (t2 - t1).
C. v = C2 / t2.
D. v = C1 / t1.

Câu 61. (Thông hiểu) Giá trị tốc độ trung bình của phản ứng luôn có giá trị
A. Âm hoặc dương.
B. Dương.
C. Bằng 0.
D. Nhỏ hơn 0.

Câu 62. (Thông hiểu) Chất ức chế là chất có tác dụng
A. Làm tăng tốc độ phản ứng.
B. Làm giảm tốc độ phản ứng.
C. Không ảnh hưởng đến tốc độ.
D. Là một loại enzyme.

Câu 63. (Thông hiểu) Khi bảo quản thực phẩm bằng cách hút chân không, ta đã tác động vào yếu tố nào?
A. Giảm nhiệt độ.
B. Giảm nồng độ oxygen (không khí).
C. Tăng diện tích bề mặt.
D. Dùng chất xúc tác.

Câu 64. (Thông hiểu) Trong thí nghiệm Mg + HCl, nếu thay dung dịch HCl 2M bằng HCl 0,5M thì
A. Bọt khí thoát ra chậm hơn.
B. Bọt khí thoát ra nhanh hơn.
C. Mg tan nhanh hơn.
D. Không có hiện tượng gì.

Câu 65. (Thông hiểu) Đơn vị M/phút tương đương với đại lượng nào?
A. mol/(L.s).
B. mol/(L.min).
C. mol.L/min.
D. L/(mol.min).

Câu 66. (Thông hiểu) Phản ứng H2 + I2 -> 2HI là phản ứng đơn giản. Biểu thức tốc độ là
A. v = k.[H2].[I2].
B. v = k.[H2]^2.[I2].
C. v = k.[H2].[I2]^2.
D. v = k.[HI]^2.

Câu 67. (Thông hiểu) Đối với phản ứng có chất khí, nếu giảm thể tích bình chứa (giữ nguyên lượng chất) thì
A. Áp suất giảm, tốc độ giảm.
B. Áp suất tăng, tốc độ tăng.
C. Áp suất tăng, tốc độ giảm.
D. Áp suất không đổi.

Câu 68. (Thông hiểu) Khi nhiệt độ tăng, động năng của các phân tử chất phản ứng
A. Giảm.
B. Tăng.
C. Không đổi.
D. Bằng 0.

Câu 69. (Thông hiểu) Ống nghiệm chứa HCl 2M phản ứng với Mg mạnh hơn ống 0,5M chứng tỏ
A. Nồng độ ảnh hưởng đến tốc độ phản ứng.
B. Nhiệt độ ảnh hưởng đến tốc độ phản ứng.
C. Xúc tác ảnh hưởng đến tốc độ phản ứng.
D. Diện tích bề mặt ảnh hưởng đến tốc độ phản ứng.

Câu 70. (Thông hiểu) Ống nghiệm chứa CaCO3 bột phản ứng với HCl mạnh hơn ống chứa viên chứng tỏ
A. Nồng độ ảnh hưởng đến tốc độ phản ứng.
B. Nhiệt độ ảnh hưởng đến tốc độ phản ứng.
C. Xúc tác ảnh hưởng đến tốc độ phản ứng.
D. Diện tích bề mặt ảnh hưởng đến tốc độ phản ứng.
Câu 71. (Vận dụng) Cho phản ứng: 2N2O5 -> 4NO2 + O2. Nồng độ N2O5 ban đầu là 2,33 M, sau 184s là 2,08 M. Tính tốc độ trung bình của phản ứng theo N2O5.
A. 1,36 x 10^-3 M/s.
B. 6,8 x 10^-4 M/s.
C. 2,72 x 10^-3 M/s.
D. 3,4 x 10^-4 M/s.

Câu 72. (Vận dụng) Phản ứng Br2 + HCOOH -> 2HBr + CO2. Ban đầu Br2 là a M, sau 50s còn 0,01 M. Tốc độ trung bình tính theo Br2 là 4 x 10^-5 M/s. Tính a.
A. 0,012 M.
B. 0,008 M.
C. 0,02 M.
D. 0,002 M.

Câu 73. (Vận dụng) Cho phản ứng A -> B. Tại t=0, nồng độ A là 0,1563 M. Tại t=1 phút, nồng độ A là 0,1496 M. Tính tốc độ trung bình trong phút thứ nhất.
A. 0,0067 M/phút.
B. 0,0033 M/phút.
C. 0,1529 M/phút.
D. 0,3059 M/phút.

Câu 74. (Vận dụng) Cho phản ứng đơn giản: H2 + I2 -> 2HI. Nếu nồng độ H2 tăng gấp đôi, I2 giữ nguyên, tốc độ phản ứng thay đổi thế nào?
A. Tăng 2 lần.
B. Tăng 4 lần.
C. Không đổi.
D. Giảm 2 lần.

Câu 75. (Vận dụng) Cho phản ứng đơn giản: 2NO + O2 -> 2NO2. Nếu nồng độ cả NO và O2 đều tăng gấp đôi, tốc độ phản ứng tăng bao nhiêu lần?
A. 2 lần.
B. 4 lần.
C. 6 lần.
D. 8 lần.

Câu 76. (Vận dụng) Một phản ứng có hệ số nhiệt độ gamma = 2. Tốc độ phản ứng tăng bao nhiêu lần khi tăng nhiệt độ từ 20 độ C lên 50 độ C?
A. 6 lần.
B. 8 lần.
C. 16 lần.
D. 4 lần.

Câu 77. (Vận dụng) Một phản ứng có hệ số nhiệt độ gamma = 3. Tốc độ phản ứng tăng bao nhiêu lần khi tăng nhiệt độ từ 30 độ C lên 50 độ C?
A. 3 lần.
B. 6 lần.
C. 9 lần.
D. 27 lần.

Câu 78. (Vận dụng) Nồi áp suất nấu ở 120 độ C so với nồi thường ở 100 độ C. Nếu gamma = 2, tốc độ làm chín thức ăn tăng bao nhiêu lần?
A. 2 lần.
B. 4 lần.
C. 8 lần.
D. 16 lần.

Câu 79. (Vận dụng) Cho phản ứng bậc 1 có k = 6,93 x 10^-3 s^-1. Tính thời gian bán hủy t 1/2.
A. 100 s.
B. 50 s.
C. 200 s.
D. 10 s.

Câu 80. (Vận dụng) Cho phản ứng phân hủy thuốc có t 1/2 = 2 giờ (bậc 1). Hằng số tốc độ k là bao nhiêu?
A. 0,3465 h^-1.
B. 0,693 h^-1.
C. 1,386 h^-1.
D. 2 h^-1.

Câu 81. (Vận dụng) Phản ứng A -> B. Tại t=1 phút, CA=0,1496 M. Tại t=2 phút, CA=0,1431 M. Tính tốc độ trung bình từ phút thứ 1 đến hết phút thứ 2.
A. 0,0065 M/phút.
B. 0,0032 M/phút.
C. 0,0130 M/phút.
D. 0,2927 M/phút.

Câu 82. (Vận dụng) Phản ứng 2A + B -> C là phản ứng đơn giản. Biểu thức tốc độ là
A. v = k.CA.CB.
B. v = k.CA^2.CB.
C. v = k.CA.CB^2.
D. v = k.CA^2.

Câu 83. (Vận dụng) Trong phản ứng 2N2O5 -> 4NO2 + O2. Nếu tốc độ phân hủy N2O5 là v1, tốc độ tạo thành O2 là v2. Mối quan hệ giữa v1 và v2 là
A. v1 = v2.
B. v1 = 2v2.
C. v1 = 0,5v2.
D. v1 = 4v2.

Câu 84. (Vận dụng) Phản ứng có Ea = 50 kJ/mol. Nếu dùng xúc tác, Ea giảm còn 30 kJ/mol. Phản ứng sẽ
A. Chậm đi.
B. Nhanh lên.
C. Không đổi.
D. Dừng lại.

Câu 85. (Vận dụng) Nếu tăng nhiệt độ thêm 10 độ C thì tốc độ phản ứng tăng 3 lần. Nếu tăng nhiệt độ thêm 30 độ C thì tốc độ tăng bao nhiêu lần?
A. 9 lần.
B. 27 lần.
C. 30 lần.
D. 3 lần.

Câu 86. (Vận dụng) Cho v = k.[A].[B]. Nếu nồng độ A giảm một nửa, nồng độ B tăng gấp đôi thì tốc độ v sẽ
A. Không đổi.
B. Tăng gấp đôi.
C. Giảm một nửa.
D. Tăng gấp 4.

Câu 87. (Vận dụng) Cho v = k.[A]^2.[B]. Nếu nồng độ A tăng gấp đôi, nồng độ B giảm một nửa thì tốc độ v sẽ
A. Tăng gấp đôi.
B. Tăng gấp 4.
C. Không đổi.
D. Giảm một nửa.

Câu 88. (Vận dụng) Hằng số tốc độ k = 0,05. Tại nồng độ chất phản ứng bằng 2M (phản ứng bậc 1), tốc độ phản ứng là
A. 0,05.
B. 0,1.
C. 0,2.
D. 0,025.

Câu 89. (Vận dụng) Biết t 1/2 = 69,3 s đối với phản ứng bậc 1. Hằng số tốc độ k (s^-1) là
A. 0,1.
B. 0,01.
C. 10.
D. 0,001.

Câu 90. (Vận dụng) Một phản ứng ở 20 độ C có v = 2 mol/Ls. Gamma = 2. Ở 40 độ C, tốc độ v bằng bao nhiêu?
A. 4 mol/Ls.
B. 8 mol/Ls.
C. 16 mol/Ls.
D. 6 mol/Ls.
Câu 91. (Vận dụng cao) Ở 27 độ C, nồng độ chất phản ứng giảm một nửa sau 5000s. Ở 37 độ C, nồng độ giảm một nửa sau 1000s. Hệ số gamma của phản ứng này là
A. 2.
B. 3.
C. 4.
D. 5.

Câu 92. (Vận dụng cao) Phản ứng bậc 2 có hằng số k. Ban đầu CA=0,01M. Sau 200 phút lượng chất còn lại bằng 3/5 nồng độ ban đầu. Nồng độ chất đã phản ứng là
A. 0,006 M.
B. 0,004 M.
C. 0,005 M.
D. 0,003 M.

Câu 93. (Vận dụng cao) Tính hằng số k của phản ứng bậc 2 (như câu 92), biết CA còn lại 0,006 M tại t=200 phút, CA ban đầu 0,01M. Sử dụng công thức kt = 1/C - 1/Co.
A. 0,33.
B. 0,66.
C. 0,15.
D. 1,5.

Câu 94. (Vận dụng cao) Cho phản ứng A -> B. Tốc độ giảm nồng độ A là 0,1 M/s. Nếu phản ứng được viết là 2A -> B thì tốc độ trung bình của phản ứng là
A. 0,1 M/s.
B. 0,05 M/s.
C. 0,2 M/s.
D. 0,01 M/s.

Câu 95. (Vận dụng cao) Phản ứng X -> Y. Tại t1, C=1M. Tại t2, C=0,5M. Tại t3, C=0,25M. Nếu (t2-t1) = (t3-t2) thì phản ứng này thuộc bậc mấy?
A. Bậc 0.
B. Bậc 1.
C. Bậc 2.
D. Không xác định được.

Câu 96. (Vận dụng cao) Dựa vào phương trình Arrhenius, nếu năng lượng hoạt hóa Ea rất lớn thì hằng số tốc độ k sẽ
A. Rất lớn.
B. Rất nhỏ.
C. Không phụ thuộc T.
D. Bằng 0.

Câu 97. (Vận dụng cao) Dựa vào phương trình Arrhenius, nếu nhiệt độ T tăng thì tỉ số -Ea/RT sẽ biến đổi như thế nào?
A. Tăng (giá trị bớt âm hơn).
B. Giảm (giá trị âm hơn).
C. Không đổi.
D. Bằng 1.

Câu 98. (Vận dụng cao) Một phản ứng có hằng số k ở 300K là 10^-5. Ở 310K là 2.10^-5. Tính Ea (xấp xỉ) biết hằng số R=8,314.
A. 50 kJ/mol.
B. 53,6 kJ/mol.
C. 100 kJ/mol.
D. 20 kJ/mol.

Câu 99. (Vận dụng cao) Cho phản ứng aA + bB -> P. Thực nghiệm cho thấy: khi [A] gấp đôi thì v gấp đôi; khi [B] gấp đôi thì v gấp 4. Biểu thức tốc độ phản ứng là
A. v = k[A][B].
B. v = k[A][B]^2.
C. v = k[A]^2[B].
D. v = k[A]^2[B]^2.

Câu 100. (Vận dụng cao) Thời gian để nồng độ giảm từ 1M xuống 0,125M đối với phản ứng bậc 1 (biết t 1/2 = 10 phút) là bao nhiêu?
A. 20 phút.
B. 30 phút.
C. 40 phút.
D. 50 phút.`;

  const rawTF = `
--- 20 CÂU MỨC ĐỘ BIẾT ---
Câu 1. Cho các phát biểu về khái niệm tốc độ phản ứng:
a) Tốc độ phản ứng đặc trưng cho sự nhanh chậm của phản ứng.
b) Tốc độ phản ứng luôn có giá trị âm.
c) Tốc độ phản ứng đo bằng sự thay đổi nồng độ theo thời gian.
d) Đơn vị tốc độ thường là mol/(L.s).
Câu 2. Cho các phát biểu về nồng độ trong phản ứng:
a) Nồng độ chất tham gia giảm dần.
b) Nồng độ chất sản phẩm tăng dần.
c) Nồng độ chất xúc tác giảm dần.
d) Đồ thị nồng độ chất tham gia là đường cong đi xuống.
Câu 3. Cho các phát biểu về phân loại tốc độ:
a) Tốc độ trung bình tính trong một khoảng thời gian.
b) Tốc độ tức thời tính tại một thời điểm.
c) Tốc độ tức thời luôn bằng tốc độ trung bình.
d) Tốc độ trung bình có thể tính theo chất tham gia hoặc sản phẩm.
Câu 4. Cho các phát biểu về các yếu tố ảnh hưởng tốc độ:
a) Nồng độ tăng làm tăng tốc độ phản ứng.
b) Nhiệt độ giảm làm tăng tốc độ phản ứng.
c) Diện tích bề mặt tăng làm tăng tốc độ phản ứng chất rắn.
d) Áp suất tăng làm tăng tốc độ phản ứng chất lỏng.
Câu 5. Cho các phát biểu về chất xúc tác:
a) Chất xúc tác làm tăng tốc độ phản ứng.
b) Chất xúc tác bị tiêu hao sau phản ứng.
c) MnO2 là xúc tác phân hủy H2O2.
d) Enzyme là xúc tác sinh học.
Câu 6. Cho các phát biểu về diện tích bề mặt:
a) Chỉ ảnh hưởng đến phản ứng có chất rắn.
b) Chất rắn dạng bột phản ứng chậm hơn dạng viên.
c) Tán nhỏ chất rắn làm tăng diện tích tiếp xúc.
d) Than tổ ong cháy tốt hơn than cục nhờ diện tích lớn.
Câu 7. Cho các phát biểu về áp suất:
a) Chỉ ảnh hưởng đến phản ứng có chất khí.
b) Tăng áp suất làm giảm khoảng cách giữa các phân tử khí.
c) Tăng áp suất làm giảm số va chạm.
d) Áp suất không ảnh hưởng đến phản ứng dung dịch.
Câu 8. Cho các phát biểu về nhiệt độ:
a) Tăng nhiệt độ làm tăng động năng phân tử.
b) Tăng nhiệt độ làm giảm tốc độ phản ứng.
c) Hệ số Van't Hoff đặc trưng cho sự tăng tốc độ theo nhiệt độ.
d) Nồi áp suất nấu nhanh hơn nhờ nhiệt độ cao hơn.
Câu 9. Cho các phát biểu về công thức tốc độ trung bình:
a) Có dấu trừ đằng trước nếu tính theo chất sản phẩm.
b) Có dấu trừ đằng trước nếu tính theo chất tham gia.
c) Chia cho hệ số cân bằng của chất đó.
d) Kết quả luôn dương.
Câu 10. Cho các phát biểu về hằng số tốc độ k:
a) Phụ thuộc vào nhiệt độ.
b) Phụ thuộc vào nồng độ.
c) Phụ thuộc vào bản chất chất phản ứng.
d) Là tốc độ khi nồng độ các chất bằng 1M.
Câu 11. Cho các phát biểu về định luật tác dụng khối lượng:
a) Áp dụng cho mọi phản ứng phức tạp.
b) Tốc độ tỉ lệ thuận với tích nồng độ chất tham gia.
c) Số mũ nồng độ là hệ số cân bằng (với phản ứng đơn giản).
d) Không phụ thuộc vào nhiệt độ.
Câu 12. Cho các phát biểu về thí nghiệm Mg + HCl:
a) Mg tan dần.
b) Khí H2 thoát ra.
c) HCl 2M phản ứng chậm hơn HCl 0,5M.
d) Đây là thí nghiệm về ảnh hưởng của nồng độ.
Câu 13. Cho các phát biểu về thí nghiệm CaCO3 + HCl:
a) CaCO3 bột phản ứng nhanh hơn CaCO3 viên.
b) Khí thoát ra là CO2.
c) Đây là thí nghiệm về ảnh hưởng của diện tích bề mặt.
d) Nồng độ HCl ở 2 ống nghiệm phải khác nhau.
Câu 14. Cho các phát biểu về thí nghiệm H2O2:
a) MnO2 là chất xúc tác.
b) Khí thoát ra là O2.
c) Tàn đốm đỏ tắt ngay khi đưa vào.
d) MnO2 không bị thay đổi khối lượng sau phản ứng.
Câu 15. Cho các phát biểu về đơn vị:
a) Thời gian có thể tính bằng giây, phút, giờ.
b) Nồng độ tính bằng mol/L (M).
c) Tốc độ có thể là M/s.
d) Hệ số nhiệt độ gamma có đơn vị là độ C.
Câu 16. Cho các phát biểu về bậc phản ứng:
a) Bậc phản ứng luôn là số nguyên dương.
b) Bậc phản ứng xác định từ thực nghiệm.
c) Bậc phản ứng là tổng số mũ trong biểu thức tốc độ.
d) Phản ứng đơn giản aA + bB -> ... có bậc là a+b.
Câu 17. Cho các phát biểu về năng lượng hoạt hóa (Ea):
a) Là năng lượng tối thiểu cần thiết để phản ứng xảy ra.
b) Chất xúc tác làm tăng Ea.
c) Nhiệt độ tăng giúp nhiều hạt vượt qua Ea hơn.
d) Ea càng lớn phản ứng càng dễ xảy ra.
Câu 18. Cho các phát biểu về ứng dụng thực tế:
a) Tủ lạnh dùng để tăng tốc độ phản ứng.
b) Men giấm là một quá trình xúc tác enzyme.
c) V2O5 dùng trong sản xuất H2SO4.
d) Bột sắt dùng trong tổng hợp NH3.
Câu 19. Cho các phát biểu về va chạm:
a) Mọi va chạm đều dẫn đến phản ứng.
b) Chỉ va chạm hiệu quả mới gây ra phản ứng.
c) Va chạm hiệu quả cần năng lượng đủ lớn.
d) Va chạm hiệu quả cần định hướng không gian đúng.
Câu 20. Cho các phát biểu về sự bảo quản:
a) Chất ức chế làm chậm phản ứng ăn mòn.
b) Chân không làm giảm nồng độ O2.
c) Ướp đá thực phẩm làm giảm nhiệt độ.
d) Phơi khô thực phẩm làm tăng nồng độ nước.
Câu 21.(Thông hiểu) Xét phản ứng đơn giản A + 2B -> C:
a) Biểu thức tốc độ là v = k[A][B].
b) Bậc phản ứng là 3.
c) Nếu [B] tăng gấp đôi, v tăng gấp 4.
d) Nếu [A] tăng gấp đôi, v tăng gấp đôi.
Câu 22.(Thông hiểu)  Xét ảnh hưởng của nhiệt độ (gamma = 2):
a) Tăng 10 độ, tốc độ tăng 2 lần.
b) Tăng 20 độ, tốc độ tăng 4 lần.
c) Tăng 30 độ, tốc độ tăng 6 lần.
d) Giảm 10 độ, tốc độ giảm một nửa.
Câu 23. (Thông hiểu)   So sánh phản ứng có xúc tác và không xúc tác:
a) Phản ứng có xúc tác xảy ra nhanh hơn.
b) Sản phẩm tạo thành là khác nhau.
c) Năng lượng hoạt hóa của phản ứng có xúc tác thấp hơn.
d) Delta H của phản ứng thay đổi.
Câu 24. (Thông hiểu)   Về đồ thị nồng độ theo thời gian của A -> B:
a) Đường của A đi xuống.
b) Đường của B đi lên.
c) Độ dốc của đường cong giảm dần theo thời gian.
d) Tại thời điểm t=0, nồng độ B đạt cực đại.
Câu 25.(Thông hiểu)    Trong phản ứng khí N2 + 3H2 -> 2NH3:
a) Tăng áp suất làm tăng tốc độ phản ứng.
b) Thêm xúc tác Fe làm tăng tốc độ phản ứng.
c) Giảm thể tích bình làm giảm tốc độ phản ứng.
d) Tăng nồng độ N2 làm tăng tốc độ phản ứng.
Câu 26. (Thông hiểu)   Về cơ chế phản ứng:
a) Phản ứng phức tạp diễn ra qua nhiều giai đoạn.
b) Giai đoạn chậm nhất quyết định tốc độ chung.
c) Mỗi giai đoạn gọi là phản ứng sơ cấp.
d) Giai đoạn nhanh nhất quyết định tốc độ chung.
Câu 27. (Thông hiểu)   Giải thích hiện tượng thực tế:
a) Củi chẻ nhỏ cháy nhanh do tăng diện tích bề mặt.
b) Thức ăn ôi thiu nhanh vào mùa hè do nhiệt độ cao.
c) Quạt gió vào bếp than để giảm nhiệt độ.
d) Nồi áp suất hầm xương nhanh nhừ do áp suất cao làm tăng nhiệt độ sôi.
Câu 28. (Thông hiểu)   Về phương trình Arrhenius k = A.e^(-Ea/RT):
a) T tăng thì k tăng.
b) Ea tăng thì k giảm.
c) A là hằng số tần số.
d) R = 0,082.
Câu 29. (Thông hiểu)   Xét phản ứng H2 + I2 -> 2HI:
a) Tốc độ tiêu thụ H2 bằng tốc độ tiêu thụ I2.
b) Tốc độ tạo thành HI gấp đôi tốc độ tiêu thụ H2.
c) Biểu thức v = k[H2][I2] đúng cho phản ứng đơn giản.
d) Nếu thể tích bình tăng gấp đôi, tốc độ giảm 4 lần.
Câu 30. (Thông hiểu)   Về chất ức chế và xúc tác:
a) Chất ức chế trái ngược với chất xúc tác.
b) Chất ức chế làm tăng Ea.
c) Chất ức chế tiêu hao trong phản ứng.
d) Chất xúc tác phục hồi sau phản ứng.
Câu 31. (Vận dụng) Phản ứng 2NO + O2 -> 2NO2 (đơn giản):
a) Biểu thức v = k[NO]^2[O2].
b) [NO] tăng 2 lần, [O2] tăng 2 lần, v tăng 8 lần.
c) [NO] giảm 2 lần, v giảm 2 lần.
d) Tổng bậc phản ứng là 3.
Câu 32. (Vận dụng) Tính tốc độ trung bình (N2O5 giảm 0,25M trong 184s):
a) Delta C = -0,25 M.
b) Tốc độ tính theo N2O5 là 1,36 x 10^-3 M/s.
c) Tốc độ phản ứng (chia hệ số 2) là 6,8 x 10^-4 M/s.
d) Tốc độ tạo thành NO2 (hệ số 4) gấp đôi tốc độ phản ứng.
Câu 33. (Vận dụng) Hệ số nhiệt độ gamma = 3:
a) Tăng từ 20 lên 40 độ C, v tăng 9 lần.
b) Tăng từ 20 lên 50 độ C, v tăng 27 lần.
c) Giảm từ 50 xuống 40 độ C, v giảm 3 lần.
d) Tăng từ 100 lên 120 độ C, v tăng 6 lần.
Câu 34. (Vận dụng) Thời gian bán hủy t1/2 = 10 phút (bậc 1):
a) k = ln2 / 10 = 0,0693 min^-1.
b) Sau 20 phút, chất phản ứng hết.
c) Sau 20 phút, còn lại 25% chất phản ứng.
d) Sau 30 phút, còn lại 12,5% chất phản ứng.
Câu 35.(Vận dụng)  Xét phản ứng trong bình kín A(k) -> B(k):
a) Áp suất chung không đổi.
b) Nồng độ A giảm theo quy luật hàm mũ (nếu bậc 1).
c) Tốc độ giảm dần theo thời gian.
d) Khi phản ứng kết thúc, tốc độ bằng 0.
Câu 36. (Vận dụng cao)  So sánh tốc độ ở 27 độ C (t1/2=5000s) và 37 độ C (t1/2=1000s):
a) Tốc độ ở 37 độ C nhanh hơn 5 lần.
b) Gamma của phản ứng là 5.
c) k ở 37 độ C lớn gấp 5 lần k ở 27 độ C.
d) Ea có thể tính được từ tỉ số k.
Câu 37.(Vận dụng cao)   Phản ứng bậc 2 (k, Co=0,01M):
a) Thời gian bán hủy phụ thuộc nồng độ đầu.
b) Công thức t1/2 = 1/(k.Co).
c) Nồng độ giảm tuyến tính theo thời gian.
d) Sau 1 thời gian bán hủy, nồng độ còn 0,005M.
Câu 38. (Vận dụng cao)  Về năng lượng hoạt hóa và Arrhenius:
a) Đồ thị ln(k) theo 1/T là đường thẳng.
b) Hệ số góc của đường thẳng là -Ea/R.
c) Giao điểm với trục tung là ln(A).
d) Có thể xác định Ea bằng thực nghiệm đo k ở các T khác nhau.
Câu 39. (Vận dụng cao)  Xét cơ chế phản ứng 2 bước: (1) A+B -> X (chậm), (2) X+A -> C (nhanh):
a) Phương trình tổng: 2A + B -> C.
b) Biểu thức tốc độ: v = k[A][B].
c) Bậc phản ứng theo A là 2.
d) X là chất trung gian.
Câu 40. (Vận dụng cao)  Các yếu tố đồng thời:
a) Tăng nồng độ và tăng nhiệt độ đều làm tăng số va chạm hiệu quả.
b) Tăng nồng độ tăng số va chạm tổng, tăng nhiệt độ tăng hiệu suất va chạm.
c) Xúc tác làm tăng số va chạm tổng.
d) Xúc tác chỉ làm giảm rào cản năng lượng.
`;

  const rawSA = `
Câu 1. Có bao nhiêu yếu tố chính ảnh hưởng đến tốc độ phản ứng được liệt kê trong bài học?
Câu 2. Số hiệu nguyên tử của nguyên tố Magnesium (Mg) là bao nhiêu?
Câu 3. Trong phản ứng phân hủy N2O5, hệ số của chất khí NO2 là bao nhiêu?
Câu 4. Có bao nhiêu loại tốc độ phản ứng được phân loại dựa trên khoảng thời gian và thời điểm?
Câu 5. Số hiệu nguyên tử của nguyên tố Oxygen (O) là bao nhiêu?
Câu 6. Hệ số của HBr trong phản ứng giữa Br2 và HCOOH là bao nhiêu?
Câu 7. Giá trị hằng số khí R dùng trong phương trình Arrhenius là bao nhiêu (J/mol.K)?
Câu 8. Trong thí nghiệm hòa tan Magnesium với acid HCl, số lượng ống nghiệm được sử dụng là bao nhiêu?
Câu 9. Nồng độ ban đầu của N2O5 trong ví dụ tính tốc độ trung bình là bao nhiêu (M)?
Câu 10. Khoảng thời gian thực hiện phản ứng phân hủy N2O5 trong ví dụ là bao nhiêu giây?
Câu 11. Nhiệt độ thực hiện phản ứng phân hủy N2O5 trong ví dụ là bao nhiêu độ C?
Câu 12. Trong công thức hệ số nhiệt độ Van-t-Hoff, giá trị mẫu số của số mũ nhiệt độ là bao nhiêu?
Câu 13. Tổng số nguyên tử trong một phân tử O2 là bao nhiêu?
Câu 14. Số hiệu nguyên tử của nguyên tố Manganese (Mn) là bao nhiêu?
Câu 15. Nồng độ phần trăm của dung dịch H2O2 được sử dụng trong thí nghiệm với MnO2 là bao nhiêu?
Câu 16. Số hiệu nguyên tử của nguyên tố Nitrogen (N) là bao nhiêu?
Câu 17. Tổng số nguyên tử trong một phân tử N2O5 là bao nhiêu?
Câu 18. Tổng số nguyên tử trong một phân tử acid HCOOH là bao nhiêu?
Câu 19. Số hiệu nguyên tử của nguyên tố Iron (Fe) là bao nhiêu?
Câu 20. Số nguyên tử Hydrogen trong một phân tử NH3 là bao nhiêu?
Câu 21. Hệ số của O2 trong phương trình phản ứng giữa NO và O2 tạo ra NO2 là bao nhiêu?
Câu 22. Có bao nhiêu cách phân loại chất xúc tác được nhắc đến trong lý thuyết?
Câu 23. Số lượng sản phẩm tạo thành trong phản ứng giữa Br2 và HCOOH là bao nhiêu?
Câu 24. Số thứ tự của lớp electron M là bao nhiêu?
Câu 25. Số nguyên tử trong một phân tử khí CO2 là bao nhiêu?
Câu 26. Số hiệu nguyên tử của nguyên tố Bromine (Br) là bao nhiêu?
Câu 27. Số hiệu nguyên tử của nguyên tố Carbon (C) là bao nhiêu?
Câu 28. Có bao nhiêu giai đoạn trong một phản ứng được gọi là phản ứng đơn giản?
Câu 29. Trong ký hiệu đơn vị tốc độ phản ứng mol.L-1.s-1, giá trị tuyệt đối của số mũ của đơn vị L là bao nhiêu?
Câu 30. Số hiệu nguyên tử của nguyên tố Sodium (Na) là bao nhiêu?
Câu 31. (Thông hiểu)   Nồng độ của N2O5 còn lại sau 184 giây trong ví dụ là bao nhiêu (M)?
Câu 32. (Thông hiểu)   Nồng độ của dung dịch HCl trong ống nghiệm có tốc độ phản ứng nhanh hơn là bao nhiêu (M)?
Câu 33. (Thông hiểu)   Nồng độ của dung dịch HCl trong ống nghiệm có tốc độ phản ứng chậm hơn là bao nhiêu (M)?
Câu 34. (Thông hiểu)   Hệ số nhiệt độ Van-t-Hoff (gamma) được giả định trong ví dụ về nồi áp suất là bao nhiêu?
Câu 35. (Thông hiểu)   Nhiệt độ tối đa mà nước có thể đạt được trong nồi áp suất theo ví dụ là bao nhiêu độ C?
Câu 36.(Thông hiểu)    Nhiệt độ sôi của nước ở điều kiện áp suất thường là bao nhiêu độ C?
Câu 37. (Thông hiểu)   Trong phản ứng đơn giản H2 + I2 tạo 2HI, nếu nồng độ H2 tăng 2 lần và giữ nguyên I2 thì tốc độ tăng bao nhiêu lần?
Câu 38.(Thông hiểu)    Trong phản ứng 2NO + O2 tạo 2NO2, nếu nồng độ NO tăng 2 lần và giữ nguyên O2 thì tốc độ tăng bao nhiêu lần?
Câu 39. (Thông hiểu)   Số nguyên tử Hydrogen có trong một phân tử giấm ăn (CH3COOH) là bao nhiêu?
Câu 40. (Thông hiểu)   Nếu nhiệt độ tăng từ 20 độ C lên 40 độ C với hệ số gamma = 2, tốc độ phản ứng tăng bao nhiêu lần?
Câu 41. (Thông hiểu)   Thời gian bán hủy của chất phản ứng ở 37 độ C trong ví dụ nâng cao là bao nhiêu giây?
Câu 42. (Thông hiểu)   Thời gian bán hủy của chất phản ứng ở 27 độ C trong ví dụ nâng cao là bao nhiêu giây?
Câu 43. (Thông hiểu)   Tỉ lệ lượng ester còn lại so với ban đầu sau 200 phút (viết dạng số thập phân) là bao nhiêu?
Câu 44. (Thông hiểu)   Trong phản ứng đơn giản có biểu thức v = k.Ca.Cb, nếu nồng độ A và B đều bằng 1 M thì tốc độ v bằng bao nhiêu lần k?
Câu 45. (Thông hiểu)   Số nguyên tử Oxygen có trong phân tử oxide cao nhất của lưu huỳnh (SO3) là bao nhiêu?
Câu 46. (Vận dụng) Tính nồng độ ban đầu a của Br2 (M) biết v = 0.00004, t = 50 giây, nồng độ sau là 0.01 M.
Câu 47. (Vận dụng) Tính tốc độ trung bình trong phút thứ nhất của phản ứng A có nồng độ giảm từ 0.1563 M xuống 0.1496 M.
Câu 48. (Vận dụng) Tính tốc độ trung bình trong phút thứ hai của phản ứng A có nồng độ giảm từ 0.1496 M xuống 0.1431 M.
Câu 49. (Vận dụng) Tính số lần tốc độ phản ứng tăng lên khi tăng nhiệt độ từ 20 độ C lên 50 độ C với hệ số gamma = 2.
Câu 50. (Vận dụng) Tính số lần tốc độ phản ứng nấu chín thức ăn tăng lên khi tăng từ 100 độ C lên 120 độ C với hệ số gamma = 2.
Câu 51. (Vận dụng) Tính nồng độ ester còn lại (M) sau 200 phút nếu nồng độ ban đầu là 0.01 M và lượng còn lại bằng 3/5 ban đầu.
Câu 52.(Vận dụng)  Tính hằng số tốc độ k của phản ứng bậc 1 ở 37 độ C (lấy 4 chữ số thập phân) biết thời gian bán hủy là 1000 giây.
Câu 53.(Vận dụng)  Tính hằng số tốc độ k của phản ứng bậc 1 ở 27 độ C (lấy 5 chữ số thập phân) biết thời gian bán hủy là 5000 giây.
Câu 54.(Vận dụng)  Tính thời gian bán hủy (phút) của một phản ứng bậc 1 biết hằng số tốc độ k = 0.02 (phút-1), làm tròn đến số nguyên.
Câu 55. (Vận dụng) Tính tốc độ trung bình theo N2O5 (đơn vị 10^-4 M/s) dựa trên biến thiên nồng độ từ 2.33 M xuống 2.08 M trong 184 giây.
Câu 56. (Vận dụng cao)  Tính năng lượng hoạt hóa Ea (kJ/mol) của phản ứng trong ví dụ nâng cao, làm tròn đến số nguyên.
Câu 57. (Vận dụng cao)  Tính hằng số tốc độ k của phản ứng ester hóa bậc 2 sau 200 phút (làm tròn 2 chữ số thập phân) với dữ kiện C0 = 0.01 M.
Câu 58. (Vận dụng cao)  Nếu nồng độ chất phản ứng bậc 1 giảm đi 4 lần sau 2000 giây, tính hằng số k (đơn vị 10^-4 s-1).
Câu 59. (Vận dụng cao)  Tính số lần tốc độ phản ứng tăng khi tăng nhiệt độ từ 30 độ C lên 70 độ C với hệ số nhiệt độ gamma = 3.
Câu 60. (Vận dụng cao)  Nếu một phản ứng tăng tốc độ 1024 lần khi tăng nhiệt độ thêm 100 độ C, giá trị hệ số nhiệt độ gamma là bao nhiêu?
`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "C,B,A,B,B,B,B,C,A,B,B,C,B,C,C,B,C,A,C,B,C,B,B,B,B,C,C,B,B,C,B,A,B,B,C,B,C,B,C,C,B,B,B,B,A,A,B,B,B,A,C,B,A,B,B,B,C,C,B,A,B,B,B,A,B,A,B,B,A,D,B,A,A,A,A,D,B,C,B,A,A,A,B,B,B,A,A,B,B,A,D,B,A,B,A,B,B,A,B,B,B,B".split(
      ",",
    );
  const ansTFList = [
    "ĐSĐĐ",
    "ĐĐSĐ",
    "ĐĐSĐ",
    "ĐSĐS",
    "ĐSĐĐ",
    "ĐSĐĐ",
    "ĐĐSS",
    "ĐSĐĐ",
    "SĐĐĐ",
    "ĐSĐĐ",
    "SSĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐSĐS",
    "SĐĐĐ",
    "SĐĐĐ",
    "ĐSSS",
    "ĐSSS",
    "ĐĐSĐ",
    "ĐSĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐSSS",
    "SĐĐĐ",
    "SSSĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSS",
    "ĐSSĐ",
    "SĐĐĐ",
    "ĐĐĐĐ",
    "ĐSSĐ",
    "ĐĐĐĐ",
    "ĐSSĐ",
    "ĐĐSĐ",
  ];
  const ansSAList =
    "5|12|4|2|8|2|8.314|2|2.33|184|45|10|2|25|3|7|7|5|26|3|1|3|2|3|3|35|6|1|1|11|2.08|2|0.5|2|120|100|2|4|4|4|1000|5000|0.6|1|3|0.012|0.0067|0.0065|8|4|0.006|0.0007|0.00014|35|6.79|124|0.33|6.93|81|2".split(
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
