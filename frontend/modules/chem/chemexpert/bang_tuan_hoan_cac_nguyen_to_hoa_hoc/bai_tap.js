const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `
Câu 1. Ai là người đầu tiên công bố bảng tuần hoàn các nguyên tố hóa học vào năm 1869?
A. Ernest Rutherford
B. Henry Moseley
C. Dmitri I. Mendeleev
D. Julius Lothar Meyer

Câu 2. Mendeleev đã sắp xếp các nguyên tố hóa học vào bảng tuần hoàn dựa theo quy luật về:
A. Cấu hình electron
B. Khối lượng nguyên tử
C. Số hiệu nguyên tử
D. Số lớp electron

Câu 3. Trong bảng tuần hoàn hiện đại, các nguyên tố được sắp xếp theo chiều tăng dần của:
A. Khối lượng nguyên tử
B. Số khối
C. Điện tích hạt nhân
D. Bán kính nguyên tử

Câu 4. Số thứ tự ô nguyên tố trong bảng tuần hoàn bằng giá trị nào sau đây?
A. Số hiệu nguyên tử (Z)
B. Số khối (A)
C. Số neutron (N)
D. Số electron hóa trị

Câu 5. Chu kì là dãy các nguyên tố có cùng đặc điểm nào về cấu tạo nguyên tử?
A. Số electron hóa trị
B. Số phân lớp electron
C. Số lớp electron
D. Số electron lớp ngoài cùng

Câu 6. Bảng tuần hoàn hiện nay gồm có bao nhiêu chu kì?
A. 5
B. 6
C. 7
D. 8

Câu 7. Các chu kì nhỏ trong bảng tuần hoàn là:
A. Chu kì 1, 2, 3
B. Chu kì 1, 2, 3, 4
C. Chu kì 4, 5, 6
D. Chu kì 5, 6, 7

Câu 8. Số thứ tự của chu kì bằng giá trị nào sau đây?
A. Số electron lớp ngoài cùng
B. Số lớp electron
C. Số hiệu nguyên tử
D. Số phân lớp electron

Câu 9. Nhóm nguyên tố là tập hợp các nguyên tố có đặc điểm nào tương tự nhau?
A. Khối lượng nguyên tử
B. Cấu hình electron tương tự nhau
C. Số lớp electron
D. Số neutron

Câu 10. Bảng tuần hoàn hiện nay có bao nhiêu cột?
A. 8
B. 10
C. 16
D. 18

Câu 11. Các nguyên tố nhóm A bao gồm những khối nguyên tố nào?
A. Khối s và khối d
B. Khối s và khối p
C. Khối p và khối d
D. Khối d và khối f

Câu 12. Đối với các nguyên tố nhóm A, số thứ tự của nhóm bằng:
A. Số electron lớp ngoài cùng
B. Số lớp electron
C. Số hiệu nguyên tử
D. Số electron ở phân lớp s

Câu 13. Nguyên tố s là những nguyên tố mà nguyên tử có electron cuối cùng điền vào:
A. Phân lớp s
B. Phân lớp p
C. Phân lớp d
D. Phân lớp f

Câu 14. Các nguyên tố thuộc nhóm VIIIA được gọi là gì?
A. Kim loại kiềm
B. Kim loại kiềm thổ
C. Halogen
D. Khí hiếm

Câu 15. Trong một chu kì, từ trái sang phải theo chiều tăng điện tích hạt nhân, bán kính nguyên tử:
A. Tăng dần
B. Giảm dần
C. Không thay đổi
D. Biến đổi không quy luật

Câu 16. Trong một nhóm A, từ trên xuống dưới theo chiều tăng điện tích hạt nhân, bán kính nguyên tử:
A. Tăng dần
B. Giảm dần
C. Không thay đổi
D. Lúc tăng lúc giảm

Câu 17. Độ âm điện là đại lượng đặc trưng cho khả năng:
A. Nhường electron
B. Hút electron khi tạo liên kết
C. Giữ electron lớp ngoài cùng
D. Dẫn điện của nguyên tử

Câu 18. Nguyên tố có độ âm điện lớn nhất trong bảng tuần hoàn là:
A. Fluorine (F)
B. Cesium (Cs)
C. Oxygen (O)
D. Chlorine (Cl)

Câu 19. Tính kim loại là tính chất của nguyên tử một nguyên tố dễ:
A. Nhận electron
B. Nhường electron
C. Chia sẻ electron
D. Hút electron

Câu 20. Tính phi kim là tính chất của nguyên tử một nguyên tố dễ:
A. Nhường electron
B. Nhận electron
C. Nhường proton
D. Chia sẻ proton

Câu 21. Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, tính kim loại của các nguyên tố:
A. Tăng dần
B. Giảm dần
C. Không đổi
D. Biến đổi tuần hoàn

Câu 22. Trong một nhóm A, theo chiều tăng dần điện tích hạt nhân, tính phi kim của các nguyên tố:
A. Tăng dần
B. Giảm dần
C. Không đổi
D. Vừa tăng vừa giảm

Câu 23. Oxide cao nhất của nguyên tố R thuộc nhóm VIA có công thức là:
A. RO2
B. RO3
C. R2O3
D. R2O5

Câu 24. Nguyên tố nào sau đây là kim loại mạnh nhất?
A. Lithium (Li)
B. Sodium (Na)
C. Cesium (Cs)
D. Potassium (K)

Câu 25. Nguyên tố nào sau đây là phi kim mạnh nhất?
A. Oxygen (O)
B. Fluorine (F)
C. Chlorine (Cl)
D. Nitrogen (N)

Câu 26. Theo quy luật tuần hoàn, tính acid của các oxide cao nhất trong một chu kì khi điện tích hạt nhân tăng sẽ:
A. Tăng dần
B. Giảm dần
C. Không đổi
D. Giảm rồi tăng

Câu 27. Theo quy luật tuần hoàn, tính base của các hydroxide cao nhất trong một chu kì khi điện tích hạt nhân tăng sẽ:
A. Tăng dần
B. Giảm dần
C. Không đổi
D. Tăng rồi giảm

Câu 28. Nguyên tố s bao gồm các nhóm nào?
A. Nhóm IA và IIA
B. Nhóm IIIA và IVA
C. Nhóm VIIA và VIIIA
D. Tất cả các nhóm B

Câu 29. Khối nguyên tố d bao gồm các nguyên tố thuộc:
A. Các chu kì nhỏ
B. Các nhóm A
C. Các nhóm B
D. Họ lanthanide

Câu 30. Ô nguyên tố Magnesium (Mg) có số hiệu nguyên tử Z = 12 cho biết điều gì?
A. Mg có 12 lớp electron
B. Mg có 12 electron lớp ngoài cùng
C. Mg có điện tích hạt nhân là +12
D. Mg thuộc nhóm IIB

Câu 31. Chu kì 3 trong bảng tuần hoàn có bao nhiêu nguyên tố?
A. 2
B. 8
C. 18
D. 32

Câu 32. Nguyên tố X có cấu hình electron 1s2 2s2 2p6 3s1. X thuộc chu kì mấy?
A. 1
B. 2
C. 3
D. 4

Câu 33. Nguyên tố Y có cấu hình electron lớp ngoài cùng là 3s2 3p5. Y thuộc nhóm nào?
A. Nhóm VA
B. Nhóm VB
C. Nhóm VIIA
D. Nhóm VIIB

Câu 34. Công thức hydroxide cao nhất của nguyên tố nhóm IA là:
A. ROH
B. R(OH)2
C. R(OH)3
D. HRO4

Câu 35. Trong bảng tuần hoàn, các nguyên tố d và f đều là:
A. Phi kim
B. Kim loại
C. Khí hiếm
D. Chất khí ở điều kiện thường

Câu 36. Nguyên tố Silicon (Si) có ứng dụng quan trọng nhất trong lĩnh vực nào?
A. Sản xuất phân bón
B. Công nghệ bán dẫn
C. Y khoa chỉnh hình
D. Sát trùng thực phẩm

Câu 37. Nguyên tố nào được trộn vào muối ăn để ngăn ngừa bệnh bướu cổ?
A. Chlorine (Cl)
B. Fluorine (F)
C. Iodine (I)
D. Sodium (Na)

Câu 38. Titanium (Ti) được dùng làm vít chỉnh hình trong y khoa vì tính chất nào?
A. Tính dẫn điện tốt
B. Tính tương thích sinh học cao
C. Giá thành rẻ
D. Có màu sắc đẹp

Câu 39. Định luật tuần hoàn phát biểu rằng tính chất của các nguyên tố biến đổi tuần hoàn theo chiều tăng của:
A. Khối lượng nguyên tử
B. Số neutron
C. Điện tích hạt nhân
D. Số lớp electron

Câu 40. Electron hóa trị của các nguyên tố nhóm A là các electron ở:
A. Lớp ngoài cùng
B. Lớp K
C. Lớp sát lớp ngoài cùng
D. Toàn bộ các lớp electron

Câu 41. (Thông hiểu) Tại sao trong một chu kì, bán kính nguyên tử lại giảm khi Z tăng?
A. Do số lớp electron tăng làm tăng lực đẩy
B. Do số lớp e không đổi nhưng lực hút của hạt nhân với lớp vỏ tăng
C. Do số electron giảm dần
D. Do khối lượng nguyên tử giảm

Câu 42. (Thông hiểu) Giải thích xu hướng tăng bán kính nguyên tử trong một nhóm A từ trên xuống dưới?
A. Do điện tích hạt nhân tăng mạnh
B. Do số lớp electron tăng dần
C. Do tính kim loại giảm dần
D. Do độ âm điện tăng dần

Câu 43. (Thông hiểu) Tại sao Fluorine (F) có độ âm điện lớn nhất?
A. Vì nó có nhiều electron nhất
B. Vì nó có bán kính nhỏ và điện tích hạt nhân đủ lớn để hút e mạnh
C. Vì nó là chất khí
D. Vì nó thuộc chu kì 2

Câu 44. (Thông hiểu) Một nguyên tử có cấu hình electron là [Ne] 3s2 3p4. Vị trí của nó là:
A. Ô số 16, chu kì 3, nhóm VIA
B. Ô số 14, chu kì 3, nhóm IVA
C. Ô số 16, chu kì 3, nhóm VIB
D. Ô số 6, chu kì 2, nhóm VIA

Câu 45. (Thông hiểu) Nguyên tố X thuộc nhóm IIA, nguyên tố Y thuộc nhóm VIIA trong cùng một chu kì. So sánh bán kính của chúng:
A. X > Y
B. X < Y
C. X = Y
D. Không so sánh được

Câu 46. (Thông hiểu) Oxide cao nhất của nguyên tố nhóm VA có tính chất gì?
A. Tính base mạnh
B. Tính acid
C. Tính lưỡng tính
D. Không có tính acid-base

Câu 47. (Thông hiểu) Cho các nguyên tố Li (Z=3), Na (Z=11), K (Z=19). Thứ tự tăng dần tính kim loại là:
A. Li < Na < K
B. K < Na < Li
C. Na < Li < K
D. Li < K < Na

Câu 48. (Thông hiểu) Nhóm VIIIB trong bảng tuần hoàn có đặc điểm gì đặc biệt?
A. Chỉ có 1 cột
B. Có 3 cột
C. Gồm các khí hiếm
D. Gồm các phi kim mạnh

Câu 49. (Thông hiểu) Ý nghĩa của các dấu hỏi chấm (?) trong bảng tuần hoàn của Mendeleev là gì?
A. Các nguyên tố Mendeleev không thích xếp vào
B. Các vị trí dành cho các nguyên tố chưa được tìm thấy
C. Các nguyên tố có tính chất không xác định
D. Các nguyên tố nhân tạo

Câu 50. (Thông hiểu) Nguyên tử của nguyên tố nào sau đây có cấu hình electron lớp ngoài cùng là 4s1?
A. Na (Z=11)
B. K (Z=19)
C. Ca (Z=20)
D. Mg (Z=12)

Câu 51. (Thông hiểu) Trong chu kì 3, nguyên tố có tính phi kim mạnh nhất là:
A. Silicon (Si)
B. Phosphorus (P)
C. Sulfur (S)
D. Chlorine (Cl)

Câu 52. (Thông hiểu) Các nguyên tố s và p thuộc cùng một nhóm A có đặc điểm gì giống nhau?
A. Có cùng số electron hóa trị
B. Có cùng số lớp electron
C. Có cùng bán kính nguyên tử
D. Có cùng khối lượng nguyên tử

Câu 53. (Thông hiểu) Vì sao tính phi kim của các nguyên tố nhóm VIIA giảm dần từ F đến I?
A. Do số lớp electron tăng, khả năng hút electron giảm
B. Do số lớp electron giảm, khả năng hút electron tăng
C. Do điện tích hạt nhân giảm
D. Do bán kính nguyên tử giảm

Câu 54. (Thông hiểu) Nguyên tố d có electron cuối cùng điền vào phân lớp nào?
A. np
B. ns
C. (n-1)d
D. nf

Câu 55. (Thông hiểu) Hydroxide nào sau đây có tính base mạnh nhất?
A. NaOH
B. Mg(OH)2
C. Al(OH)3
D. Ba(OH)2

Câu 56. (Thông hiểu) Đặc điểm chung của các nguyên tố trong cùng một hàng của bảng tuần hoàn là:
A. Có cùng số electron lớp ngoài cùng
B. Có cùng số lớp electron
C. Có cùng số electron hóa trị
D. Có tính chất hóa học giống nhau

Câu 57. (Thông hiểu) Sự biến đổi tính chất acid-base của các hydroxide chu kì 3 từ trái sang phải là:
A. Acid tăng, base giảm
B. Acid giảm, base tăng
C. Acid và base đều tăng
D. Acid và base đều giảm

Câu 58. (Thông hiểu) Nguyên tố X thuộc nhóm VIIIA. X là:
A. Một kim loại mạnh
B. Một phi kim mạnh
C. Một khí hiếm
D. Một nguyên tố phóng xạ

Câu 59. (Thông hiểu) Nhóm VIIA còn có tên gọi phổ biến là nhóm:
A. Kim loại kiềm
B. Kim loại kiềm thổ
C. Chalcogen
D. Halogen

Câu 60. (Thông hiểu) Khi biết cấu hình electron của một nguyên tố, ta KHÔNG suy ra được thông tin nào sau đây?
A. Số thứ tự ô
B. Số thứ tự chu kì
C. Số thứ tự nhóm
D. Tỉ lệ các đồng vị trong tự nhiên

Câu 61. (Thông hiểu) Nguyên tắc "Các nguyên tố có cùng số lớp electron được xếp vào cùng một hàng" tương ứng với thành phần nào trong bảng tuần hoàn?
A. Ô nguyên tố
B. Nhóm
C. Chu kì
D. Khối nguyên tố

Câu 62. (Thông hiểu) Kim loại kiềm thuộc nhóm nào?
A. Nhóm IA
B. Nhóm IIA
C. Nhóm IB
D. Nhóm IIB

Câu 63. (Thông hiểu) Nguyên tố He (Z=2) được xếp vào nhóm VIIIA vì:
A. Có 8 electron lớp ngoài cùng
B. Có cấu hình electron lớp ngoài cùng bão hòa (bền vững)
C. Có 2 electron hóa trị như Mg
D. Là một kim loại

Câu 64. (Thông hiểu) Cấu hình electron hóa trị của các nguyên tố nhóm IIA có dạng:
A. ns1
B. ns2
C. ns2 np2
D. (n-1)d10 ns2

Câu 65. (Thông hiểu) Sự phân loại nguyên tố thành khối s, p, d, f dựa trên:
A. Số lớp electron
B. Phân lớp chứa electron có mức năng lượng cao nhất
C. Tính kim loại - phi kim
D. Số electron lớp ngoài cùng

Câu 66. (Thông hiểu) Trong một nhóm A, theo chiều tăng Z, đại lượng nào sau đây TĂNG?
A. Độ âm điện
B. Tính phi kim
C. Tính kim loại
D. Lực hút giữa hạt nhân và electron lớp ngoài cùng

Câu 67. (Thông hiểu) Các nguyên tố d thuộc về:
A. Chu kì 1, 2, 3
B. Chu kì 4, 5, 6, 7
C. Nhóm IA đến VIIIA
D. Toàn bộ bảng tuần hoàn

Câu 68. (Thông hiểu) Phosphorus (Z=15) thuộc nhóm VA. Công thức oxide cao nhất của nó là:
A. P2O3
B. P2O5
C. PO2
D. P2O

Câu 69. (Thông hiểu) Aluminium (Z=13) có cấu hình electron [Ne] 3s2 3p1. Aluminium là nguyên tố:
A. Khối s
B. Khối p
C. Khối d
D. Khối f

Câu 70. (Thông hiểu) Để so sánh tính chất của 2 nguyên tố lân cận trong bảng tuần hoàn, ta dựa vào:
A. Quy luật biến đổi trong chu kì và nhóm
B. Màu sắc của đơn chất
C. Khối lượng nguyên tử
D. Năm phát minh ra nguyên tố

Câu 71. (Vận dụng) Sắp xếp các nguyên tố sau theo chiều tăng dần bán kính nguyên tử: N (Z=7), O (Z=8), P (Z=15).
A. O < N < P
B. N < O < P
C. P < N < O
D. O < P < N

Câu 72. (Vận dụng) Nguyên tố R có công thức oxide cao nhất là R2O7. R thuộc nhóm nào?
A. Nhóm IIA
B. Nhóm VA
C. Nhóm VIIA
D. Nhóm VIIB

Câu 73. (Vận dụng) Nguyên tố X có Z = 20. X thuộc khối nguyên tố nào?
A. Khối s
B. Khối p
C. Khối d
D. Khối f

Câu 74. (Vận dụng) Hợp chất khí với hydrogen của một nguyên tố nhóm VIA có công thức là:
A. RH
B. RH2
C. RH3
D. RH4

Câu 75. (Vận dụng) Cho X (Z=14) và Y (Z=16). So sánh độ âm điện của chúng:
A. X > Y
B. X < Y
C. X = Y
D. Không so sánh được

Câu 76. (Vận dụng) Cho các nguyên tố: Be (Z=4), Mg (Z=12), Ca (Z=20). Thứ tự giảm dần tính base của các hydroxide là:
A. Ca(OH)2 > Mg(OH)2 > Be(OH)2
B. Be(OH)2 > Mg(OH)2 > Ca(OH)2
C. Mg(OH)2 > Ca(OH)2 > Be(OH)2
D. Ca(OH)2 > Be(OH)2 > Mg(OH)2

Câu 77. (Vận dụng) Nguyên tố X thuộc chu kì 3, nhóm IIA. Cấu hình electron của X là:
A. 1s2 2s2 2p6 3s1
B. 1s2 2s2 2p6 3s2
C. 1s2 2s2 2p6 3s2 3p2
D. 1s2 2s2 2p6 3s2 3p6 4s2

Câu 78. (Vận dụng) Một phi kim R thuộc chu kì 2. Oxide cao nhất của nó là RO2. R là nguyên tố nào?
A. Carbon (C)
B. Nitrogen (N)
C. Silicon (Si)
D. Sulfur (S)

Câu 79. (Vận dụng) Cho dãy nguyên tố: Na, Mg, Al, Si. Nguyên tố có tính acid của oxide cao nhất mạnh nhất là:
A. Na
B. Mg
C. Al
D. Si

Câu 80. (Vận dụng) Nguyên tử của nguyên tố X có tổng số electron ở các phân lớp s là 6. X thuộc chu kì mấy?
A. 2
B. 3
C. 4
D. 5

Câu 81. (Vận dụng) Nguyên tố X ở ô số 19. Cấu hình electron của ion X+ là:
A. 1s2 2s2 2p6 3s2 3p6 4s1
B. 1s2 2s2 2p6 3s2 3p6
C. 1s2 2s2 2p6 3s2 3p6 4s2
D. 1s2 2s2 2p6 3s2 3p5

Câu 82. (Vận dụng) Cho cấu hình electron của sắt (Fe) là 1s2 2s2 2p6 3s2 3p6 3d6 4s2. Fe thuộc nhóm:
A. IIA
B. IIB
C. VIIIA
D. VIIIB

Câu 83. (Vận dụng) Một nguyên tố nhóm VIA có tổng số electron là 16. Vị trí của nó là:
A. Ô 16, chu kì 3, nhóm VIA
B. Ô 16, chu kì 4, nhóm VIA
C. Ô 8, chu kì 2, nhóm VIA
D. Ô 32, chu kì 4, nhóm VIA

Câu 84. (Vận dụng) Sắp xếp các acid sau theo chiều giảm dần tính acid: H2SiO3, H2SO4, HClO4, H3PO4.
A. HClO4 > H2SO4 > H3PO4 > H2SiO3
B. H2SiO3 > H3PO4 > H2SO4 > HClO4
C. HClO4 > H3PO4 > H2SO4 > H2SiO3
D. H2SO4 > HClO4 > H3PO4 > H2SiO3

Câu 85. (Vận dụng) Nguyên tố X có hóa trị cao nhất với oxygen là 5. Trong hợp chất khí với hydrogen, X chiếm 82,35% về khối lượng. X là:
A. Phosphorus (P)
B. Nitrogen (N)
C. Arsenic (As)
D. Antimony (Sb)

Câu 86. (Vận dụng) Nguyên tố X thuộc chu kì 3, có cấu hình e lớp ngoài cùng là ns2 np1. Công thức oxide cao nhất của X là:
A. X2O
B. XO
C. X2O3
D. XO3

Câu 87. (Vận dụng) Cho X (Z=11), Y (Z=13), Z (Z=15). Thứ tự tăng dần độ âm điện là:
A. X < Y < Z
B. Z < Y < X
C. Y < X < Z
D. X < Z < Y

Câu 88. (Vận dụng) Ion M2+ có cấu hình e là 1s2 2s2 2p6. Vị trí của M là:
A. Ô 8, chu kì 2, nhóm VIA
B. Ô 10, chu kì 2, nhóm VIIIA
C. Ô 12, chu kì 3, nhóm IIA
D. Ô 11, chu kì 3, nhóm IA

Câu 89. (Vận dụng) Cho các nguyên tố M (Z=11), X (Z=17). Hợp chất tạo bởi M và X có tính chất:
A. Là hợp chất cộng hóa trị
B. Là hợp chất ion
C. Không tan trong nước
D. Là chất khí ở nhiệt độ thường

Câu 90. (Vận dụng) Nguyên tử nguyên tố X có e cuối cùng điền vào phân lớp 3p1. X là:
A. Kim loại
B. Phi kim
C. Khí hiếm
D. Á kim

Câu 91. (Vận dụng cao) Một hợp chất Y có công thức M2X. Tổng số hạt trong Y là 116. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 36. Số khối của M lớn hơn của X là 7. Tổng số hiệu nguyên tử của M và X là:
A. 19
B. 21
C. 23
D. 25

Câu 92. (Vận dụng cao) Nguyên tố X có hóa trị cao nhất với oxygen gấp 3 lần hóa trị trong hợp chất với hydrogen. X thuộc nhóm nào?
A. Nhóm IVA
B. Nhóm VA
C. Nhóm VIA
D. Nhóm VIIA

Câu 93. (Vận dụng cao) Tổng số hiệu nguyên tử của hai nguyên tố X, Y thuộc hai chu kì liên tiếp và cùng một nhóm A là 32. X, Y là:
A. Mg (Z=12) và Ca (Z=20)
B. Na (Z=11) và K (Z=19)
C. O (Z=8) và S (Z=16)
D. Ne (Z=10) và Ar (Z=18)

Câu 94. (Vận dụng cao) Nguyên tố R thuộc nhóm VIIA. Tỉ lệ khối lượng của R trong oxide cao nhất và trong hợp chất khí với hydrogen là 2,512. Nguyên tử khối của R là:
A. 19
B. 35,5
C. 80
D. 127

Câu 95. (Vận dụng cao) X, Y là hai nguyên tố đứng kế tiếp nhau trong một chu kì. Tổng số hiệu nguyên tử của X và Y là 25. Vị trí của X và Y là:
A. Chu kì 3, nhóm IIA và IIIA
B. Chu kì 3, nhóm IA và IIA
C. Chu kì 4, nhóm IA và IIA
D. Chu kì 3, nhóm IIIA và IVA

Câu 96. (Vận dụng cao) Hydroxide cao nhất của một nguyên tố có tính acid mạnh nhất. Nguyên tố đó thuộc nhóm nào?
A. Nhóm IA
B. Nhóm IVA
C. Nhóm VIIA
D. Nhóm VIIIA

Câu 97. (Vận dụng cao) Cho 0,6 gam một kim loại nhóm IIA tác dụng hết với nước thu được 0,336 lít khí H2 (đkc). Kim loại đó là:
A. Be
B. Mg
C. Ca
D. Ba

Câu 98. (Vận dụng cao) Nguyên tố X thuộc chu kì 4. Nguyên tử X có phân lớp lớp ngoài cùng đã bão hòa và có tổng số electron ở phân lớp p là 18. X thuộc nhóm nào?
A. Nhóm IIA
B. Nhóm IIB
C. Nhóm VIIIA
D. Nhóm VIIA

Câu 99. (Vận dụng cao) Một nguyên tố X có oxide cao nhất là XO3. Trong hợp chất khí với hydrogen, hydrogen chiếm 5,88% về khối lượng. X là:
A. Sulfur (S)
B. Selenium (Se)
C. Tellurium (Te)
D. Chromium (Cr)

Câu 100. (Vận dụng cao) Hai nguyên tố A và B cùng một nhóm A và ở hai chu kì liên tiếp. Tổng số proton của A và B là 22. A và B lần lượt là:
A. Be và Mg
B. Li và Na
C. C và Si
D. O và S
`;

  const rawTF = `
Câu 1. Về lịch sử phát minh bảng tuần hoàn:
a) Mendeleev sắp xếp các nguyên tố theo chiều tăng dần khối lượng nguyên tử.
b) Meyer cũng độc lập phát minh ra bảng tuần hoàn cùng thời điểm với Mendeleev.
c) Moseley đã chứng minh bảng tuần hoàn nên sắp xếp theo số hiệu nguyên tử.
d) Mendeleev dự đoán đúng sự tồn tại của nguyên tố Argon.

Câu 2. Về các nguyên tắc sắp xếp bảng tuần hoàn hiện đại:
a) Các nguyên tố được xếp theo chiều tăng dần của số khối.
b) Các nguyên tố có cùng số lớp electron được xếp vào cùng một chu kì.
c) Các nguyên tố có cùng số electron hóa trị được xếp vào cùng một nhóm.
d) Số hiệu nguyên tử bằng số điện tích hạt nhân.

Câu 3. Về chu kì trong bảng tuần hoàn:
a) Bảng tuần hoàn có 7 chu kì.
b) Chu kì 1 là chu kì ngắn nhất chỉ có 2 nguyên tố.
c) Chu kì 4, 5, 6, 7 được gọi là các chu kì lớn.
d) Các nguyên tố trong cùng chu kì có tính chất hóa học giống hệt nhau.

Câu 4. Về nhóm nguyên tố:
a) Nhóm A gồm các nguyên tố s và p.
b) Nhóm B gồm các nguyên tố d và f.
c) Nhóm VIIIA gồm các kim loại kiềm.
d) Số thứ tự nhóm A bằng số electron lớp ngoài cùng.

Câu 5. Về xu hướng biến đổi bán kính nguyên tử:
a) Trong một chu kì, bán kính tăng dần từ trái sang phải.
b) Trong một nhóm A, bán kính tăng dần từ trên xuống dưới.
c) Nguyên tử Cs có bán kính lớn hơn Fr (trong nhóm IA).
d) Hạt nhân càng hút mạnh lớp vỏ thì bán kính nguyên tử càng giảm.

Câu 6. Về độ âm điện:
a) Độ âm điện đặc trưng cho khả năng nhường electron.
b) Trong một chu kì, độ âm điện tăng dần theo chiều tăng của Z.
c) Fluorine có độ âm điện cao nhất.
d) Kim loại thường có độ âm điện lớn hơn phi kim.

Câu 7. Về tính kim loại và phi kim:
a) Tính kim loại đặc trưng bởi khả năng nhường electron.
b) Tính phi kim tăng dần trong một chu kì từ trái sang phải.
c) Trong nhóm A, từ trên xuống dưới tính kim loại giảm dần.
d) Phi kim mạnh nhất là Fluorine.

Câu 8. Về oxide và hydroxide cao nhất:
a) Tính acid của các hydroxide tăng dần trong chu kì từ trái sang phải.
b) NaOH là một base mạnh.
c) Al(OH)3 là một hydroxide lưỡng tính.
d) Các nguyên tố nhóm IA tạo oxide cao nhất dạng R2O.

Câu 9. Về phân loại nguyên tố:
a) Nguyên tố s thuộc nhóm IA và IIA (và He).
b) Nguyên tố p bắt đầu từ nhóm IIIA đến VIIIA.
c) Các nguyên tố d đều là kim loại chuyển tiếp.
d) Họ Lanthanide thuộc khối nguyên tố p.

Câu 10. Về định luật tuần hoàn:
a) Tính chất các nguyên tố biến đổi tuần hoàn theo khối lượng nguyên tử.
b) Cấu hình electron nguyên tử biến đổi tuần hoàn.
c) Tính chất các đơn chất cũng biến đổi tuần hoàn.
d) Thành phần các hợp chất không biến đổi tuần hoàn.

Câu 11. Cho nguyên tố X (Z=11):
a) X thuộc chu kì 3.
b) X là một phi kim mạnh.
c) X thuộc nhóm IA.
d) Oxide cao nhất của X là X2O.

Câu 12. Cho nguyên tố Y (Z=17):
a) Y thuộc nhóm VIIA.
b) Y là một halogen.
c) Y có độ âm điện rất lớn.
d) Công thức acid cao nhất là HY.

Câu 13. Về ý nghĩa bảng tuần hoàn:
a) Từ vị trí nguyên tố có thể suy ra cấu tạo nguyên tử.
b) Từ cấu tạo nguyên tử có thể suy ra vị trí trong bảng.
c) Bảng tuần hoàn giúp so sánh tính chất các nguyên tố.
d) Bảng tuần hoàn chỉ cho biết nguyên tử khối của nguyên tố.

Câu 14. Về các ứng dụng thực tế:
a) Silicon được dùng làm pin mặt trời.
b) Iodine giúp phòng bệnh bướu cổ.
c) Titanium không được dùng trong y tế vì độc.
d) Các nguyên tố hiếm thường dùng trong công nghệ cao.

Câu 15. So sánh tính chất các nguyên tố chu kì 3:
a) Na có bán kính nhỏ hơn Mg.
b) Cl có tính phi kim mạnh nhất chu kì.
c) P có độ âm điện lớn hơn S.
d) Mg(OH)2 có tính base yếu hơn NaOH.

Câu 16. Về electron hóa trị:
a) Nguyên tố nhóm IA có 1 electron hóa trị.
b) Nguyên tố nhóm VIIA có 7 electron hóa trị.
c) Electron hóa trị của nguyên tố d chỉ nằm ở lớp ngoài cùng.
d) Electron hóa trị tham gia vào việc hình thành liên kết hóa học.

Câu 17. Về cấu hình electron:
a) 1s2 2s2 2p6 3s2 3p1 thuộc nhóm IIIA.
b) [Ar] 4s2 thuộc chu kì 4.
c) [Ne] 3s2 3p5 là cấu hình của Cl.
d) 1s2 2s2 2p6 là cấu hình của khí hiếm Neon.

Câu 18. (Thông hiểu) Về các quy luật trong nhóm VIIA:
a) Bán kính tăng dần từ F đến I.
b) Độ âm điện tăng dần từ F đến I.
c) Tính phi kim giảm dần từ F đến I.
d) Tính acid của các hydroxide cao nhất tăng dần từ F đến I.

Câu 19. (Thông hiểu) Về các khối nguyên tố:
a) Khối s gồm các nguyên tố nhóm IA và IIA.
b) Khối p gồm các nguyên tố từ nhóm IIIA đến VIIIA.
c) Khối d gồm các nguyên tố nhóm B.
d) Khối f nằm ở 2 hàng cuối của bảng tuần hoàn.

Câu 20. (Thông hiểu) Về biến đổi hóa trị:
a) Hóa trị cao nhất với oxygen tăng từ 1 đến 7 trong một chu kì.
b) Hóa trị trong hợp chất khí với hydrogen giảm từ 4 đến 1 (từ nhóm IVA đến VIIA).
c) Tổng hóa trị với oxygen và với hydrogen luôn bằng 8 (từ nhóm IVA trở đi).
d) Kim loại nhóm IA có hóa trị 2 với oxygen.

Câu 21. (Thông hiểu) So sánh các hydroxide:
a) Ba(OH)2 mạnh hơn Mg(OH)2.
b) H2SO4 mạnh hơn H3PO4.
c) NaOH yếu hơn KOH.
d) HClO4 là acid mạnh nhất trong các acid có oxygen.

Câu 22. (Thông hiểu) Về vị trí của các nguyên tố d:
a) Nằm ở các chu kì 1, 2, 3.
b) Bắt đầu xuất hiện từ chu kì 4.
c) Thuộc các nhóm từ IB đến VIIIB.
d) Là các kim loại.

Câu 23. (Thông hiểu) Về các ô nguyên tố:
a) Cho biết số hiệu nguyên tử.
b) Cho biết nguyên tử khối trung bình.
c) Cho biết số neutron của đồng vị phổ biến nhất.
d) Cho biết tên và kí hiệu hóa học.

Câu 24. (Thông hiểu) Về electron lớp ngoài cùng:
a) Quyết định tính chất hóa học cơ bản của nguyên tố.
b) Bão hòa khi có 8 electron (trừ chu kì 1).
c) Các nguyên tố cùng nhóm A có cùng số electron lớp ngoài cùng.
d) Luôn bằng số hiệu nguyên tử.

Câu 25. (Vận dụng) Cho X (Z=12), Y (Z=16):
a) X là kim loại, Y là phi kim.
b) X thuộc chu kì 3, Y thuộc chu kì 3.
c) Bán kính của X nhỏ hơn Y.
d) Độ âm điện của Y lớn hơn X.

Câu 26. (Vận dụng) Cho oxide cao nhất R2O5:
a) R thuộc nhóm VA.
b) Hợp chất khí với hydrogen là RH3.
c) R có thể là Phosphorus.
d) R có 5 electron hóa trị.

Câu 27. (Vận dụng) Cho kim loại kiềm thổ M:
a) M thuộc nhóm IIA.
b) M có 2 electron lớp ngoài cùng.
c) Oxide cao nhất là MO.
d) Hydroxide tương ứng là M(OH).

Câu 28. (Vận dụng) So sánh N (Z=7) và P (Z=15):
a) N và P cùng nhóm VA.
b) Bán kính của N lớn hơn P.
c) Tính phi kim của N mạnh hơn P.
d) Độ âm điện của N lớn hơn P.

Câu 29. (Vận dụng) Về nguyên tố d (Z=26):
a) Là nguyên tố sắt (Fe).
b) Thuộc chu kì 4.
c) Thuộc nhóm VIIIB.
d) Có 2 electron ở lớp ngoài cùng.

Câu 30. (Vận dụng) Cho các hydroxide: NaOH, Mg(OH)2, Al(OH)3.
a) Đều là các hydroxide của nguyên tố chu kì 3.
b) Tính base giảm dần theo thứ tự trên.
c) Al(OH)3 tan được trong dung dịch acid và kiềm mạnh.
d) NaOH tan tốt trong nước tạo dung dịch kiềm mạnh.

Câu 31. (Vận dụng cao) Bài toán về hai nguyên tố kế tiếp trong chu kì:
a) Hiệu số hiệu nguyên tử là 1.
b) Nếu tổng Z = 31 thì Z1 = 15, Z2 = 16.
c) Cả hai cùng thuộc một nhóm.
d) Tính chất hóa học của chúng rất giống nhau.

Câu 32. (Vận dụng cao) Bài toán về hai nguyên tố cùng nhóm, chu kì liên tiếp:
a) Hiệu số hiệu nguyên tử có thể là 8, 18 hoặc 32.
b) Nếu tổng Z = 32 thì Z1 = 12, Z2 = 20.
c) Hai nguyên tố này có tính chất hóa học tương tự nhau.
d) Bán kính nguyên tử của nguyên tố ở chu kì lớn hơn sẽ nhỏ hơn.

Câu 33. (Vận dụng cao) Về nguyên tố phi kim X có % khối lượng R trong oxide cao nhất:
a) Nếu R2O5 và %R = 43,66% thì R là Phosphorus.
b) Nếu R2O7 và %R = 38,76% thì R là Chlorine.
c) Công thức hợp chất khí với hydrogen xác định được từ nhóm.
d) Hóa trị cao nhất với oxygen luôn bằng số thứ tự nhóm A.

Câu 34. (Vận dụng cao) Về xu hướng biến đổi trong bảng tuần hoàn:
a) Điểm nút của sự biến đổi là các khí hiếm.
b) Tính phi kim mạnh nhất ở góc trên bên phải (trừ khí hiếm).
c) Tính kim loại mạnh nhất ở góc dưới bên trái.
d) Độ âm điện biến đổi ngược chiều với bán kính nguyên tử.

Câu 35. (Vận dụng cao) Về oxide và hydroxide cao nhất của nhóm IVA:
a) Công thức oxide là RO2.
b) Hydroxide là H2RO3 hoặc R(OH)4.
c) Tính acid của các hydroxide này giảm dần từ trên xuống.
d) Carbon thuộc nhóm này có oxide là CO2.

Câu 36. (Vận dụng cao) Về các nguyên tố hiếm và siêu nặng:
a) Các nguyên tố Z > 110 đều là nguyên tố nhân tạo.
b) Có thể dự đoán tính chất của nguyên tố 118 dựa trên nhóm VIIIA.
c) Nguyên tố 117 sẽ có tính chất của một halogen.
d) Tất cả các nguyên tố này đều rất bền.

Câu 37. (Vận dụng cao) Về cấu hình electron đặc biệt:
a) Cr (Z=24) có cấu hình [Ar] 3d5 4s1.
b) Cu (Z=29) có cấu hình [Ar] 3d10 4s1.
c) Các cấu hình này giúp nguyên tử bền vững hơn.
d) Cả Cr và Cu đều thuộc nhóm IB.

Câu 38. (Vận dụng cao) Về tính acid-base lân cận:
a) Si(OH)4 (H2SiO3) là acid yếu hơn H3PO4.
b) H2SO4 mạnh hơn HClO4.
c) Mg(OH)2 mạnh hơn Al(OH)3.
d) KOH mạnh hơn NaOH.

Câu 39. (Vận dụng cao) Về bán kính ion (liên hệ):
a) Bán kính cation nhỏ hơn bán kính nguyên tử tương ứng.
b) Bán kính anion lớn hơn bán kính nguyên tử tương ứng.
c) Các ion có cùng số electron (như Na+, Mg2+, F-), ion nào có Z lớn hơn thì bán kính nhỏ hơn.
d) Bán kính ion không tuân theo quy luật nào.

Câu 40. (Vận dụng cao) Về định luật tuần hoàn:
a) Là định luật cơ bản của hóa học.
b) Cho phép tiên đoán tính chất các chất chưa biết.
c) Chỉ đúng với các nguyên tố nhóm A.
d) Phản ánh mối liên hệ giữa vi mô (cấu tạo e) và vĩ mô (tính chất).
`;

  const rawSA = `
Câu 1. 	Bảng tuần hoàn hiện nay có bao nhiêu chu kì?
Câu 2.	Bảng tuần hoàn hiện nay có bao nhiêu cột?
Câu 3.	Số electron lớp ngoài cùng của các nguyên tố nhóm IA là bao nhiêu?
Câu 4.	Số hiệu nguyên tử (Z) của nguyên tố Lithium là bao nhiêu?
Câu 5.	Số lớp electron của các nguyên tố thuộc chu kì 3 là bao nhiêu?
Câu 6.	Số electron hóa trị của nguyên tố nhóm VA là bao nhiêu?
Câu 7.	Số hiệu nguyên tử (Z) của nguyên tố Sodium là bao nhiêu?
Câu 8.	Chu kì 1 có bao nhiêu nguyên tố?
Câu 9.	Số hiệu nguyên tử (Z) của nguyên tố Silicon là bao nhiêu?
Câu 10.	Số phân lớp electron trong lớp M (n=3) là bao nhiêu?
Câu 11.	Số electron tối đa trong lớp n = 2 là bao nhiêu?
Câu 12.	Số electron lớp ngoài cùng của nguyên tử Helium là bao nhiêu?
Câu 13.	Số thứ tự ô của nguyên tố Phosphorus là bao nhiêu?
Câu 14.	Chỉ số n (số thứ tự lớp) của lớp electron gần hạt nhân nhất là bao nhiêu?
Câu 15.	Tổng số electron hóa trị của nguyên tố nhóm VIIA là bao nhiêu?
Câu 16.	Số nguyên tố trong chu kì 2 là bao nhiêu?
Câu 17.	Số hiệu nguyên tử (Z) của nguyên tố Chlorine là bao nhiêu?
Câu 18.	Nhóm VIIIB có bao nhiêu cột?
Câu 19.	Tổng số nhóm A trong bảng tuần hoàn là bao nhiêu?
Câu 20.	Số electron tối đa có thể chứa trong phân lớp s là bao nhiêu?

Câu 21.	Nguyên tố Fluorine có độ âm điện là bao nhiêu (theo thang Pauling)?
Câu 22.	Hóa trị cao nhất với oxygen của nguyên tố nhóm VIIA là bao nhiêu?
Câu 23.	Hóa trị trong hợp chất khí với hydrogen của nguyên tố nhóm IVA là bao nhiêu?
Câu 24.	Số electron tối đa trong phân lớp p là bao nhiêu?
Câu 25.	Số chu kì lớn (chu kì có nhiều nguyên tố) trong bảng tuần hoàn là bao nhiêu?
Câu 26.	Độ âm điện của Cesium là bao nhiêu (theo thang Pauling)?
Câu 27.	Một nguyên tố ở chu kì 3, nhóm VIA có số hiệu nguyên tử (Z) là bao nhiêu?
Câu 28.	Khối các nguyên tố d bắt đầu xuất hiện từ chu kì thứ mấy?
Câu 29.	Nguyên tử khối trung bình của Chlorine là bao nhiêu?
Câu 30.	Hóa trị cao nhất với oxygen của nguyên tố nhóm IIA là bao nhiêu?
Câu 31.	Số electron tối đa trong lớp M (lớp thứ 3) là bao nhiêu?
Câu 32.	Số electron lớp ngoài cùng của các nguyên tố khí hiếm (trừ He) là bao nhiêu?
Câu 33.	Nguyên tử Nhôm (Al, Z=13) có bao nhiêu electron ở lớp ngoài cùng?
Câu 34.	Nguyên tố Sulfur (S, Z=16) có bao nhiêu electron hóa trị?
Câu 35.	Số hiệu nguyên tử (Z) của nguyên tố Neon là bao nhiêu?
Câu 36.	Số hiệu nguyên tử (Z) của nguyên tố Argon là bao nhiêu?
Câu 37.	Nguyên tố Calcium (Z=20) có bao nhiêu lớp electron?
Câu 38.	Hóa trị cao nhất với oxygen của nguyên tố nhóm VA là bao nhiêu?
Câu 39.	Số electron tối đa trong phân lớp d là bao nhiêu?
Câu 40.	Một nguyên tố ở chu kì 4 có bao nhiêu lớp electron?

Câu 41.	Xác định số hiệu nguyên tử (Z) của nguyên tố X thuộc chu kì 3, nhóm VA.
Câu 42.	Tính số electron hóa trị của nguyên tố X có cấu hình electron [Ar] 3d⁵ 4s¹.
Câu 43.	Xác định vị trí (ô số) của nguyên tố có cấu hình electron lớp ngoài cùng là 3s² 3p⁴.
Câu 44.	Số electron lớp ngoài cùng của nguyên tử sắt (Fe) có Z = 26 là bao nhiêu?
Câu 45.	Cho Li (Z=3), Na (Z=11), K (Z=19). Số hiệu nguyên tử của nguyên tố có bán kính lớn nhất là bao nhiêu?
Câu 46.	Cho F (Z=9), Cl (Z=17), Br (Z=35). Số hiệu nguyên tử của nguyên tố có độ âm điện thấp nhất là bao nhiêu?
Câu 47.	Oxide cao nhất của Silicon (Z=14) có bao nhiêu nguyên tử Oxygen trong phân tử?
Câu 48.	Anion X^{2-} có 18 electron. Số hiệu nguyên tử (Z) của X là bao nhiêu?
Câu 49.	Cation M^{2+} có 18 electron. Số hiệu nguyên tử (Z) của M là bao nhiêu?
Câu 50.	Trong phân tử Al_2O_3, tổng số nguyên tử Oxygen là bao nhiêu?

Câu 51.	X đứng kế tiếp Y trong cùng một chu kì, tổng Z của X và Y là 23. Số hiệu nguyên tử của nguyên tố lớn hơn là bao nhiêu?
Câu 52.	Hai nguyên tố A và B cùng nhóm A, thuộc hai chu kì liên tiếp, tổng Z là 30. Số hiệu nguyên tử của nguyên tố lớn hơn là bao nhiêu?
Câu 53.	Kim loại M thuộc nhóm IIA, 0,4g M tác dụng với nước tạo ra 0,224 lít khí H_2 (đkc). Số hiệu nguyên tử (Z) của M là bao nhiêu?
Câu 54.	Một phi kim nhóm VIIA có % khối lượng oxygen trong oxide cao nhất là 61,2%. Số hiệu nguyên tử (Z) của phi kim đó là bao nhiêu?
Câu 55.	Tổng số hiệu nguyên tử của 2 nguyên tố X, Y thuộc 2 chu kì liên tiếp và cùng một nhóm A là 22. Số hiệu nguyên tử của X (với Z_X < Z_Y) là bao nhiêu?
Câu 56.	Hợp chất khí với hydrogen của nguyên tố R có công thức $RH_4$, trong đó hydrogen chiếm 25% về khối lượng. Số hiệu nguyên tử (Z) của R là bao nhiêu?
Câu 57.	Oxide cao nhất của nguyên tố R có công thức R_2O_5, trong đó Oxygen chiếm 56,34% về khối lượng. Số hiệu nguyên tử (Z) của R là bao nhiêu?
Câu 58.	Hai nguyên tố X, Y cùng nhóm A, ở 2 chu kì liên tiếp có tổng số proton là 32. Số hiệu nguyên tử của nguyên tố lớn hơn là bao nhiêu?
Câu 59.	Trong phân tử acid HClO_4, có bao nhiêu nguyên tử Oxygen?
Câu 60.	Oxide cao nhất của nguyên tố X có dạng XO_3. Hợp chất khí với hydrogen của X có bao nhiêu nguyên tử hydrogen trong phân tử?
`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "C,B,C,A,C,C,A,B,B,D,B,A,A,D,B,A,B,A,B,B,B,B,B,C,B,A,B,A,C,C,B,C,C,A,B,B,C,B,C,A,B,B,B,A,A,B,A,B,B,B,D,A,A,C,A,B,A,C,A,C,D,B,C,A,A,C,A,B,B,B,A,A,C,A,B,A,B,D,D,C,A,B,B,C,B,B,A,C,C,B,C,A,A,B,B,C,C,B,A,A,A,B,C,B,A,C,C,B,A,D".split(
      ",",
    );
  const ansTFList = [
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "SĐSĐ",
    "SĐĐS",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "SĐĐS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "SĐSĐ",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐSĐS",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "SĐĐĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐSS",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
  ];
  const ansSAList =
    "7|18|1|3|3|5|11|2|14|3|8|2|15|1|7|8|17|3|8|2|3|7|4|6|4|0.79|16|4|35.5|2|18|8|3|6|10|18|4|5|10|4|15|6|16|2|19|35|2|16|20|3|12|19|20|17|7|6|15|20|4|2".split(
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
