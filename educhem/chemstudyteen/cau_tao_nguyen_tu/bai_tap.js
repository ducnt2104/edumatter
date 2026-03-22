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
Câu 41. (Thông hiểu) Tại sao khối lượng nguyên tử tập trung chủ yếu ở hạt nhân?
A. Vì hạt nhân có kích thước lớn nhất
B. Vì khối lượng electron không đáng kể so với proton và neutron
C. Vì electron không có khối lượng
D. Vì hạt nhân chứa nhiều hạt nhất
Câu 42. (Thông hiểu) Trong thí nghiệm Rutherford, tại sao một số ít hạt alpha bị bật ngược lại?
A. Do va chạm với vỏ electron
B. Do va chạm trực diện với hạt nhân mang điện dương có khối lượng lớn
C. Do bị hút bởi hạt nhân
D. Do lá vàng quá dày
Câu 43. (Thông hiểu) Kí hiệu He-4 (Z=2) cho biết nguyên tử này có bao nhiêu neutron?
A. 2
B. 4
C. 6
D. 0
Câu 44. (Thông hiểu) Đồng vị C-14 khác C-12 ở điểm nào?
A. Số proton
B. Số electron
C. Số neutron
D. Vị trí trong bảng tuần hoàn
Câu 45. (Thông hiểu) Nếu một nguyên tử có 3 lớp electron, lớp ngoài cùng là lớp nào?
A. K
B. L
C. M
D. N
Câu 46. (Thông hiểu) Phân lớp 3d chứa tối đa bao nhiêu electron?
A. 2
B. 6
C. 10
D. 14
Câu 47. (Thông hiểu) Cấu hình electron lớp ngoài cùng dạng ns2 np5 cho biết nguyên tố đó là:
A. Kim loại
B. Phi kim
C. Khí hiếm
D. Kim loại chuyển tiếp
Câu 48. (Thông hiểu) Sự khác biệt cơ bản giữa mô hình Bohr và mô hình hiện đại là gì?
A. Sự tồn tại của hạt nhân
B. Quỹ đạo chuyển động của electron
C. Khối lượng của electron
D. Điện tích của hạt nhân
Câu 49. (Thông hiểu) Tại sao nguyên tử trung hòa về điện?
A. Vì neutron không mang điện
B. Vì tổng điện tích dương của proton bằng tổng điện tích âm của electron
C. Vì electron chuyển động rất nhanh
D. Vì hạt nhân nằm ở trung tâm
Câu 50. (Thông hiểu) Giá trị Z = 11 cho biết điều gì về nguyên tử Sodium (Na)?
A. Có 11 neutron
B. Có khối lượng 11 amu
C. Có 11 proton và 11 electron
D. Có 11 lớp electron
Câu 51. (Thông hiểu) Để xác định tuổi cổ vật, người ta dùng đồng vị nào?
A. U-235
B. C-14
C. I-131
D. C-12
Câu 52. (Thông hiểu) Đồng vị I-131 được dùng trong lĩnh vực nào?
A. Khảo cổ học
B. Y học (tuyến giáp)
C. Năng lượng hạt nhân
D. Sản xuất điện tử
Câu 53. (Thông hiểu) Số lượng AO trong lớp n = 2 là bao nhiêu?
A. 1
B. 3
C. 4
D. 9
Câu 54. (Thông hiểu) Phân lớp bão hòa là phân lớp như thế nào?
A. Đã có đủ số electron tối đa
B. Có số electron bằng số proton
C. Có số electron bằng số neutron
D. Không chứa electron nào
Câu 55. (Thông hiểu) Nguyên tử có cấu hình 1s2 2s2 2p6 là nguyên tử của loại nguyên tố nào?
A. Kim loại
B. Phi kim
C. Khí hiếm
D. Halogen
Câu 56. (Thông hiểu) Hạt nào không bị lệch trong điện trường?
A. Proton
B. Electron
C. Neutron
D. Tia âm cực
Câu 57. (Thông hiểu) Kích thước nguyên tử thường được đo bằng đơn vị nào?
A. Mét (m) và Kilômét (km)
B. Nanomet (nm) và Angstrom (A)
C. Milimét (mm) và Micromét
D. Gram và Kilogram
Câu 58. (Thông hiểu) Tổng số hạt trong nguyên tử H (Protium) là bao nhiêu?
A. 1
B. 2
C. 3
D. 4
Câu 59. (Thông hiểu) Lớp electron nào có mức năng lượng thấp nhất?
A. Lớp K
B. Lớp L
C. Lớp M
D. Lớp Q
Câu 60. (Thông hiểu) Nguyên tố có Z=17 (Chlorine) là phi kim vì:
A. Có 7 electron lớp ngoài cùng
B. Có 17 proton
C. Là chất khí
D. Có 3 lớp electron
Câu 61. (Thông hiểu) Phát biểu nào SAI về neutron?
A. Nằm trong hạt nhân
B. Không mang điện
C. Khối lượng xấp xỉ proton
D. Luôn có số lượng bằng proton
Câu 62. (Thông hiểu) Mật độ vật chất trong hạt nhân như thế nào?
A. Rất thấp
B. Trung bình
C. Rất lớn (hàng tỉ tấn/cm3)
D. Bằng mật độ ở lớp vỏ
Câu 63. (Thông hiểu) 1 nm bằng bao nhiêu Angstrom?
A. 1
B. 10
C. 100
D. 1000
Câu 64. (Thông hiểu) AO p gồm mấy orbital định hướng trong không gian?
A. 1 (px)
B. 2 (px, py)
C. 3 (px, py, pz)
D. 5
Câu 65. (Thông hiểu) Cấu hình electron tuân theo nguyên lí vững bền có nghĩa là:
A. Điền electron từ ngoài vào trong
B. Điền electron từ mức năng lượng thấp đến cao
C. Điền electron sao cho độc thân tối đa
D. Điền đầy các lớp chẵn trước
Câu 66. (Thông hiểu) Nguyên tử Lithium (Z=3) có vỏ electron cấu tạo như thế nào?
A. 2 electron lớp K, 1 electron lớp L
B. 3 electron lớp K
C. 1 electron lớp K, 2 electron lớp L
D. 3 electron phân bố đều
Câu 67. (Thông hiểu) Hạt nhân nguyên tử mang điện tích dương là do:
A. Chứa neutron
B. Chứa proton
C. Chứa electron
D. Chứa hạt alpha
Câu 68. (Thông hiểu) Trong nguyên tử, khoảng không gian giữa hạt nhân và electron là:
A. Không khí
B. Chân không (rỗng)
C. Chất lỏng
D. Các hạt neutron
Câu 69. (Thông hiểu) Nguyên tử X có tổng số hạt p, n, e là 10, trong đó số hạt mang điện nhiều hơn không mang điện là 2. X là:
A. H
B. He
C. Li
D. Be
Câu 70. (Thông hiểu) Nguyên tử khối trung bình của một nguyên tố phụ thuộc vào yếu tố nào?
A. Chỉ số khối của đồng vị nặng nhất
B. Số khối và tỉ lệ phần trăm số nguyên tử của các đồng vị
C. Số proton của nguyên tố
D. Kích thước của mẫu đo
Câu 71. (Vận dụng) Nguyên tử Al có Z = 13, A = 27. Số neutron của Al là:
A. 13
B. 14
C. 27
D. 40
Câu 72. (Vận dụng) Nguyên tử K có 19 proton, 20 neutron. Kí hiệu nguyên tử là:
A. K-19
B. K-20
C. K-39
D. K-40
Câu 73. (Vận dụng) Tổng số hạt trong nguyên tử F (Z=9, A=19) là:
A. 19
B. 28
C. 9
D. 10
Câu 74. (Vận dụng) Một nguyên tử có 26 electron và 30 neutron. Số khối A là:
A. 26
B. 30
C. 56
D. 52
Câu 75. (Vận dụng) Nguyên tử Ca có Z=20. Cấu hình electron lớp ngoài cùng là:
A. 3s2
B. 4s2
C. 4p2
D. 3d2
Câu 76. (Vận dụng) Nguyên tử X có cấu hình electron 1s2 2s2 2p3. Tổng số electron của X là:
A. 5
B. 7
C. 2
D. 3
Câu 77. (Vận dụng) Cho Cl có hai đồng vị bền Cl-35 (75%) và Cl-37 (25%). Nguyên tử khối trung bình là:
A. 35,5
B. 36,0
C. 36,5
D. 35,0
Câu 78. (Vận dụng) Nguyên tử N có Z=7. Số electron độc thân ở lớp ngoài cùng là:
A. 1
B. 2
C. 3
D. 0
Câu 79. (Vận dụng) Lớp M (n=3) chứa tối đa bao nhiêu electron?
A. 8
B. 18
C. 32
D. 50
Câu 80. (Vận dụng) Nguyên tử X có Z=12 (Mg). Số electron ở phân lớp s là:
A. 2
B. 4
C. 6
D. 12
Câu 81. (Vận dụng) Cấu hình electron của K (Z=19) là:
A. [Ar] 3d1
B. [Ar] 4s1
C. [Ne] 3s2 3p6 4s1
D. [Ar] 4p1
Câu 82. (Vận dụng) Nguyên tử P (Z=15) có bao nhiêu lớp electron?
A. 1
B. 2
C. 3
D. 4
Câu 83. (Vận dụng) Biết Cu có hai đồng vị Cu-63 và Cu-65. Nguyên tử khối trung bình là 63,54. Phần trăm đồng vị Cu-63 là:
A. 27%
B. 73%
C. 54%
D. 46%
Câu 84. (Vận dụng) Nguyên tử Oxygen (Z=8) có bao nhiêu electron ở phân lớp p?
A. 2
B. 4
C. 6
D. 8
Câu 85. (Vận dụng) Tổng số hạt trong phân tử H2O (H: 1p, 0n; O: 8p, 8n) là:
A. 10
B. 18
C. 26
D. 28
Câu 86. (Vận dụng) Nguyên tử Fe (Z=26). Số electron thuộc phân lớp 3d là:
A. 2
B. 4
C. 6
D. 8
Câu 87. (Vận dụng) Nguyên tử X có Z=16. X là:
A. Kim loại
B. Phi kim
C. Khí hiếm
D. Á kim
Câu 88. (Vận dụng) Cho kí hiệu Na-23 (Z=11). Số hạt mang điện trong nguyên tử là:
A. 11
B. 12
C. 22
D. 23
Câu 89. (Vận dụng) Nguyên tử Argon (Z=18) có lớp ngoài cùng chứa bao nhiêu electron?
A. 2
B. 6
C. 8
D. 18
Câu 90. (Vận dụng) Cấu hình electron của Cr (Z=24) đặc biệt ở chỗ:
A. Có 4s2 3d4
B. Có 4s1 3d5
C. Có 3d6
D. Không có lớp 4s
Câu 91. (Vận dụng cao) Nguyên tử Zn có bán kính r = 1,35 x 10 mũ -10 m, nguyên tử khối 65 amu. Khối lượng riêng gần đúng (g/cm3) là:
A. 5,0 g/cm3
B. 10,5 g/cm3
C. 7,2 g/cm3
D. 2,7 g/cm3
Câu 92. (Vận dụng cao) Carbon có hai đồng vị C-12 và C-13. Biết nguyên tử khối trung bình là 12,011. Số nguyên tử C-13 trong 1000 nguyên tử Carbon là:
A. 1
B. 11
C. 989
D. 50
Câu 93. (Vận dụng cao) Tổng số hạt p, n, e trong nguyên tử X là 52. Số hạt mang điện nhiều hơn hạt không mang điện là 16. X là:
A. Cl (Z=17)
B. S (Z=16)
C. O (Z=8)
D. F (Z=9)
Câu 94. (Vận dụng cao) Nguyên tử X có tổng số hạt là 34. Số khối nhỏ hơn 24. Cấu hình electron của X là:
A. 1s2 2s2 2p6 3s1
B. 1s2 2s2 2p6 3s2
C. 1s2 2s2 2p6
D. 1s2 2s2 2p5
Câu 95. (Vận dụng cao) Bromine có hai đồng vị, trong đó Br-79 chiếm 50,69%. Biết nguyên tử khối trung bình là 79,91. Số khối của đồng vị thứ hai là:
A. 80
B. 81
C. 82
D. 78
Câu 96. (Vận dụng cao) Một nguyên tử có Z=29 (Cu). Số electron ở các phân lớp có mức năng lượng cao nhất là bao nhiêu? (Xét cấu hình bền)
A. 9 (ở 3d)
B. 10 (ở 3d)
C. 2 (ở 4s)
D. 1 (ở 4s)
Câu 97. (Vận dụng cao) Giả sử hạt nhân nguyên tử phóng đại thành quả cầu đường kính 10cm. Nguyên tử sẽ có đường kính 1km. Tỉ lệ đường kính nguyên tử so với hạt nhân là:
A. 10.000 lần
B. 1.000 lần
C. 100.000 lần
D. 1.000.000 lần
Câu 98. (Vận dụng cao) Số electron tối đa của lớp thứ n là 2n^2. Công thức này đúng với giá trị n nào?
A. Mọi n
B. n từ 1 đến 7
C. n <= 4
D. n > 4
Câu 99. (Vận dụng cao) Nguyên tử X có e cuối cùng điền vào phân lớp 3p, số e phân lớp này gấp đôi phân lớp 3s. Z của X là:
A. 14
B. 16
C. 12
D. 18
Câu 100. (Vận dụng cao) Tổng số hạt trong ion M+ là 57. Trong nguyên tử M, số hạt mang điện nhiều hơn không mang điện là 18. Nguyên tử M là:
A. Ca (Z=20)
B. K (Z=19)
C. Cl (Z=17)
D. Ar (Z=18)`;

  const rawTF = `
Câu 1. Cho các phát biểu về thành phần nguyên tử:
a) Nguyên tử gồm hạt nhân mang điện dương và lớp vỏ electron mang điện âm.
b) Proton và neutron có khối lượng xấp xỉ bằng nhau và bằng khoảng 1 amu.
c) Trong nguyên tử, số lượng proton luôn lớn hơn số lượng electron.
d) Nguyên tử Hydrogen (H-1) là nguyên tử duy nhất không có neutron.
Câu 2. Cho các phát biểu về điện tích và khối lượng:
a) Điện tích của một electron là -1,602 x 10 mũ -19 C.
b) Khối lượng nguyên tử tập trung chủ yếu ở lớp vỏ electron.
c) Khối lượng của electron xấp xỉ 0,00055 amu, rất nhỏ so với proton.
d) Điện tích hạt nhân bằng tổng điện tích của các electron trong nguyên tử trung hòa.
Câu 3. Về thí nghiệm của Rutherford:
a) Ông sử dụng dòng hạt beta để bắn phá lá vàng mỏng.
b) Hầu hết các hạt alpha đi thẳng chứng tỏ nguyên tử có cấu tạo rỗng.
c) Một số ít hạt bị bật ngược lại do va chạm với electron.
d) Thí nghiệm này giúp tìm ra hạt nhân nguyên tử.
Câu 4. Về kích thước và đơn vị đo:
a) Đường kính nguyên tử lớn gấp khoảng 10.000 lần đường kính hạt nhân.
b) 1 nm = 10 Angstrom.
c) Kích thước nguyên tử thường được đo bằng milimet.
d) Nguyên tử có cấu tạo đặc khít.
Câu 5. Về kí hiệu nguyên tử và hạt cơ bản:
a) Số hiệu nguyên tử Z bằng số proton và bằng số electron.
b) Số khối A là tổng số proton và electron.
c) Kí hiệu nguyên tử X có A viết ở trên, Z viết ở dưới bên trái.
d) Neutron là hạt mang điện tích âm.
Câu 6. Về đồng vị:
a) Các đồng vị của cùng một nguyên tố có cùng số proton.
b) Các đồng vị có số khối A giống nhau.
c) Tính chất hóa học của các đồng vị bền của cùng một nguyên tố là tương tự nhau.
d) Hydrogen có 3 đồng vị là H-1, H-2 và H-3.
Câu 7. Về nguyên tử khối trung bình:
a) Nguyên tử khối trung bình luôn là một số nguyên.
b) Giá trị này phụ thuộc vào tỉ lệ phần trăm số nguyên tử của các đồng vị.
c) Chlorine có nguyên tử khối trung bình khoảng 35,5.
d) Đồng vị nào chiếm tỉ lệ % lớn hơn sẽ quyết định giá trị trung bình gần với số khối của nó hơn.
Câu 8. Về chuyển động của electron:
a) Theo mô hình Bohr, electron chuyển động trên các quỹ đạo tròn xác định.
b) Theo mô hình hiện đại, electron chuyển động hỗn loạn không theo quỹ đạo xác định.
c) Electron chuyển động rất chậm trong nguyên tử.
d) Đám mây electron là vùng không gian có xác suất tìm thấy electron thấp.
Câu 9. Về Orbital nguyên tử (AO):
a) AO là khu vực xác suất tìm thấy electron khoảng 90%.
b) AO s có hình số tám nổi.
c) AO p có hình cầu.
d) Các AO p định hướng theo các trục x, y, z.
Câu 10. Về lớp và phân lớp electron:
a) Lớp K (n=1) có mức năng lượng cao nhất.
b) Số electron tối đa trong phân lớp p là 6.
c) Lớp thứ n (n<=4) có tối đa 2n bình phương electron.
d) Phân lớp d chứa tối đa 14 electron.
Câu 11. Về cấu hình electron:
a) Các electron sẽ chiếm mức năng lượng từ cao xuống thấp.
b) Nguyên lí Pauli nói rằng mỗi AO chứa tối đa 2 electron ngược chiều spin.
c) Quy tắc Hund ưu tiên điền electron ghép đôi trước khi để độc thân.
d) Cấu hình electron quyết định tính chất kim loại hay phi kim.
Câu 12. Về đặc điểm lớp ngoài cùng:
a) Nguyên tử có 1, 2, 3 electron lớp ngoài cùng thường là kim loại.
b) Nguyên tử có 8 electron lớp ngoài cùng luôn là khí hiếm (kể cả He).
c) Nguyên tử có 5, 6, 7 electron lớp ngoài cùng thường là phi kim.
d) Lớp ngoài cùng bão hòa khi có 18 electron.
Câu 13. Cho nguyên tử Na (Z=11):
a) Na có 11 proton và 11 electron.
b) Cấu hình electron của Na là 1s2 2s2 2p6 3s2.
c) Na là một kim loại.
d) Na có 1 electron độc thân ở lớp ngoài cùng.
Câu 14. Cho nguyên tử Cl (Z=17):
a) Cl có 3 lớp electron.
b) Lớp ngoài cùng của Cl có 7 electron.
c) Cl là phi kim.
d) Phân lớp có mức năng lượng cao nhất của Cl là 3s.
Câu 15. Về nguyên tử khối và khối lượng:
a) 1 amu bằng 1/12 khối lượng nguyên tử Carbon-12.
b) Khối lượng nguyên tử tính bằng gam có giá trị rất lớn.
c) Khối lượng của proton xấp xỉ khối lượng của neutron.
d) Khối lượng electron đóng góp đáng kể vào khối lượng nguyên tử.
Câu 16. Về hạt nhân nguyên tử:
a) Hạt nhân luôn mang điện tích dương.
b) Hạt nhân chứa hầu hết khối lượng của nguyên tử.
c) Hạt nhân có kích thước rất nhỏ so với kích thước nguyên tử.
d) Tất cả hạt nhân đều chứa proton và neutron.
Câu 17. Cho đồng vị Carbon (C-12 và C-13):
a) C-12 chiếm tỉ lệ phổ biến hơn trong tự nhiên.
b) C-13 có nhiều hơn C-12 một proton.
c) C-14 là đồng vị phóng xạ dùng trong khảo cổ.
d) Cả ba đồng vị đều có Z = 6.
Câu 18. Về số lượng AO trong các lớp:
a) Lớp K có 1 AO s.
b) Lớp L có 1 AO s và 3 AO p.
c) Lớp M có tổng cộng 9 AO.
d) Phân lớp f có 5 AO.
Câu 19. Về năng lượng electron:
a) Các electron ở gần hạt nhân liên kết chặt chẽ hơn electron ở xa.
b) Năng lượng của electron ở lớp K lớn hơn lớp L.
c) Trong cùng một lớp, năng lượng phân lớp s < p < d < f.
d) Năng lượng của 4s luôn thấp hơn 3d.
Câu 20. Ứng dụng và thực tế:
a) Kiến thức về electron là cơ sở của ngành bán dẫn.
b) Đồng vị U-235 dùng trong nhà máy điện hạt nhân.
c) I-131 dùng để chữa bệnh phổi.
d) Hạt nhân nguyên tử không thể bị phá vỡ.
Câu 21. (Thông hiểu) So sánh p và n:
a) p mang điện dương, n không mang điện.
b) p nằm trong hạt nhân, n nằm ở vỏ.
c) Khối lượng p và n xấp xỉ nhau.
d) Trong nguyên tử bền (Z < 83), số n luôn lớn hơn hoặc bằng số p (trừ H).
Câu 22. (Thông hiểu) Về nguyên tử trung hòa:
a) Tổng số hạt mang điện gấp đôi số hạt proton.
b) Số hạt không mang điện luôn bằng số hạt mang điện dương.
c) Nếu mất đi 1 electron, nguyên tử trở thành ion dương.
d) Nếu nhận thêm 1 electron, nguyên tử trở thành ion âm.
Câu 23. (Thông hiểu) Về thí nghiệm tìm ra electron:
a) Dùng ống tia âm cực.
b) Tia âm cực là chùm hạt electron.
c) Tia này bị lệch về cực dương chứng tỏ nó mang điện âm.
d) Thomson là người thực hiện thí nghiệm này.
Câu 24. (Thông hiểu) Về kí hiệu 23-Na:
a) Số hiệu nguyên tử là 23.
b) Số khối là 23.
c) Số neutron là 12.
d) Số electron là 11.
Câu 25. (Thông hiểu) Về cấu hình Fe (Z=26):
a) Cấu hình là [Ar] 3d6 4s2.
b) Fe có 2 electron lớp ngoài cùng.
c) Fe là nguyên tố d.
d) Fe có 4 lớp electron.
Câu 26. (Thông hiểu) Về vỏ electron khí hiếm:
a) Luôn có 8e lớp ngoài cùng.
b) Cấu hình bền vững, khó tham gia phản ứng hóa học.
c) Helium có 2e lớp ngoài cùng cũng là khí hiếm.
d) Neon (Z=10) có cấu hình 1s2 2s2 2p6.
Câu 27. (Thông hiểu) Về tính chất phi kim:
a) Thường có 5, 6, 7 e lớp ngoài cùng.
b) Dễ nhường electron trong phản ứng hóa học.
c) N, O, F là các phi kim điển hình.
d) Phi kim dẫn điện tốt.
Câu 28. (Thông hiểu) Về phân lớp bão hòa:
a) s2 là bão hòa.
b) p3 là bán bão hòa.
c) d5 là bão hòa.
d) f14 là bão hòa.
Câu 29. (Thông hiểu) Về kích thước:
a) 1 Angstrom = 10 mũ -10 mét.
b) Nguyên tử Hydrogen có kích thước nhỏ nhất.
c) Kích thước hạt nhân phụ thuộc vào số electron.
d) Nguyên tử có cấu trúc đặc.
Câu 30. (Thông hiểu) Về kí hiệu hóa học:
a) 2H chỉ 2 nguyên tử Hydrogen.
b) H2 chỉ 1 phân tử Hydrogen.
c) 2H2 chỉ 2 phân tử Hydrogen.
d) H chỉ 1 nguyên tử Hydrogen.
Câu 31. (Vận dụng) Cho X (Z=8, A=17):
a) X là đồng vị nặng của Oxygen.
b) X có 9 neutron.
c) X có 8 proton.
d) X có 8 electron.
Câu 32. (Vận dụng) Cấu hình của Cr (Z=24):
a) Có sự chuyển e từ 4s sang 3d để đạt bán bão hòa.
b) Cấu hình đúng là [Ar] 3d5 4s1.
c) Có 6 electron độc thân.
d) Là kim loại.
Câu 33. (Vận dụng) Đồng vị Cl (75% Cl-35, 25% Cl-37):
a) Cứ 4 nguyên tử Cl thì có 3 nguyên tử Cl-35.
b) Nguyên tử khối trung bình là 35,5.
c) Cl-37 nặng hơn Cl-35 do nhiều proton hơn.
d) Tính chất hóa học của 2 đồng vị này giống hệt nhau.
Câu 34. (Vận dụng) Nguyên tử Ca (Z=20):
a) Cấu hình [Ar] 4s2.
b) Ca là kim loại kiềm thổ.
c) Mất 2e sẽ đạt cấu hình khí hiếm Argon.
d) Có 20 neutron nếu A=40.
Câu 35. (Vận dụng) Nguyên tử P (Z=15):
a) Có 5e lớp ngoài cùng.
b) Có 3e độc thân ở phân lớp 3p.
c) Là phi kim.
d) Có 3 lớp electron.
Câu 36. (Vận dụng cao) Bài toán hạt: Tổng hạt là 40, hạt mang điện nhiều hơn không mang điện là 12.
a) Số p + e - n = 12.
b) 2p + n = 40.
c) Giải ra p = 13, n = 14.
d) Nguyên tố là Al.
Câu 37. (Vận dụng cao) Khối lượng riêng hạt nhân:
a) Rất lớn vì khối lượng lớn nhưng thể tích cực nhỏ.
b) Tương đương khối lượng riêng của cả nguyên tử.
c) Có thể đạt tới hàng trăm triệu tấn/cm3.
d) Không thể tính toán được.
Câu 38. (Vận dụng cao) Cấu hình Cu (Z=29):
a) Là [Ar] 3d9 4s2.
b) Là [Ar] 3d10 4s1.
c) Là kim loại chuyển tiếp.
d) Có 1e lớp ngoài cùng nên là kim loại kiềm.
Câu 39. (Vận dụng cao) Đồng vị Hydrogen:
a) H-1 không có neutron.
b) H-2 (Deuterium) có 1 neutron.
c) H-3 (Tritium) có 2 neutron.
d) Nước nặng (D2O) được tạo từ H-2.
Câu 40. (Vận dụng cao) Năng lượng ion hóa (liên hệ):
a) Electron xa hạt nhân dễ bị tách ra nhất.
b) Electron lớp K có năng lượng thấp nhất nhưng bị hút chặt nhất.
c) Tách electron khỏi cấu hình bão hòa rất khó.
d) Năng lượng của 3d thấp hơn 4s khi chưa có electron.`;

  const rawSA = `
Câu 1. Điện tích của hạt proton là bao nhiêu (theo đơn vị điện tích nguyên tố)?
Câu 2. Điện tích của hạt electron là bao nhiêu (theo đơn vị điện tích nguyên tố)?
Câu 3. Số proton của nguyên tử có Z = 13 là bao nhiêu?
Câu 4. Số electron của nguyên tử có Z = 20 là bao nhiêu?
Câu 5. 1 amu bằng bao nhiêu gam (lấy số mũ -24)?
Câu 6. Đường kính nguyên tử lớn gấp bao nhiêu lần đường kính hạt nhân (trung bình)?
Câu 7. Số neutron trong nguyên tử Li (Z=3, A=7) là bao nhiêu?
Câu 8. Số khối A của nguyên tử có 6p và 6n là bao nhiêu?
Câu 9. Số electron tối đa trong phân lớp s là bao nhiêu?
Câu 10. Số electron tối đa trong phân lớp p là bao nhiêu?
Câu 11. Số electron tối đa trong phân lớp d là bao nhiêu?
Câu 12. Số electron tối đa trong phân lớp f là bao nhiêu?
Câu 13. Lớp K (n=1) chứa tối đa bao nhiêu electron?
Câu 14. Lớp L (n=2) chứa tối đa bao nhiêu electron?
Câu 15. Lớp M (n=3) chứa tối đa bao nhiêu electron?
Câu 16. Kí hiệu của lớp thứ 4 là chữ cái gì?
Câu 17. Số orbital trong phân lớp p là bao nhiêu?
Câu 18. Số orbital trong phân lớp d là bao nhiêu?
Câu 19. Nguyên tử Na (Z=11) có bao nhiêu lớp electron?
Câu 20. Nguyên tử Ca (Z=20) có bao nhiêu electron ở lớp ngoài cùng?
Câu 21. Số hiệu nguyên tử của Carbon là bao nhiêu?
Câu 22. Số khối của đồng vị Hydrogen nhẹ nhất?
Câu 23. Số neutron của đồng vị Tritium (H-3)?
Câu 24. Nguyên tử Nitrogen (Z=7) có bao nhiêu electron độc thân?
Câu 25. Nguyên tử Neon (Z=10) có bao nhiêu electron lớp ngoài cùng?
Câu 26. Số phân lớp trong lớp N (n=4) là bao nhiêu?
Câu 27. Giá trị điện tích hạt nhân của O (Z=8) là bao nhiêu (+...)?
Câu 28. Hạt không mang điện trong nguyên tử có điện tích bằng?
Câu 29. Hạt có khối lượng nhỏ nhất trong 3 loại hạt có khối lượng bao nhiêu?
Câu 30. Số electron trong ion H+ là bao nhiêu?
Câu 31. (Thông hiểu) Tổng số hạt mang điện trong nguyên tử He (Z=2) là bao nhiêu?
Câu 32. (Thông hiểu) Tổng số hạt (p, n, e) trong H-1 là bao nhiêu?
Câu 33. (Thông hiểu) Số neutron của Cl-37 (Z=17) là bao nhiêu?
Câu 34. (Thông hiểu) Phân lớp 3d đã bão hòa chứa bao nhiêu electron?
Câu 35. (Thông hiểu) Số e lớp ngoài cùng của Al (Z=13)?
Câu 36. (Thông hiểu) Số lớp electron của K (Z=19)?
Câu 37. (Thông hiểu) Số e độc thân của O (Z=8)?
Câu 38. (Thông hiểu) Z=15 thì nguyên tố ở chu kì mấy (dựa vào số lớp)?
Câu 39. (Thông hiểu) Tổng số electron trên các phân lớp s của Mg (Z=12)?
Câu 40. (Thông hiểu) Số hạt trong hạt nhân nguyên tử F (Z=9, A=19)?
Câu 41. (Thông hiểu) Số electron hóa trị của Cl (Z=17)?
Câu 42. (Thông hiểu) 1 nm bằng bao nhiêu Angstrom?
Câu 43. (Thông hiểu) Cấu hình 1s2 2s2 2p3 ứng với Z bằng mấy?
Câu 44. (Thông hiểu) Số AO trong lớp n=3?
Câu 45. (Thông hiểu) Số hạt mang điện trong hạt nhân He (Z=2)?
Câu 46. (Vận dụng) Tính nguyên tử khối trung bình của Cl (75% Cl-35, 25% Cl-37)?
Câu 47. (Vận dụng) Tính số khối của X biết X có 10e và 10n?
Câu 48. (Vận dụng) Tổng số hạt trong nguyên tử X (Z=11, A=23)?
Câu 49. (Vận dụng) Số neutron trong nguyên tử U-238 (Z=92)?
Câu 50. (Vận dụng) Số electron lớp ngoài cùng của Fe (Z=26)?
Câu 51. (Vận dụng) Số e trên phân lớp 3d của Fe (Z=26)?
Câu 52. (Vận dụng) Số electron phân lớp s của Ca (Z=20)?
Câu 53. (Vận dụng) Số khối của đồng vị Cu thứ hai, biết Cu-63 (73%), A trung bình = 63,54?
Câu 54. (Vận dụng) Tổng số hạt proton trong phân tử CO2 (C=6, O=8)?
Câu 55. (Vận dụng) Tổng số electron trong phân tử NH3 (N=7, H=1)?
Câu 56. (Vận dụng cao) Số nguyên tử C-13 trong 10.000 nguyên tử C (cho A trung bình = 12,011)?
Câu 57. (Vận dụng cao) Số hạt mang điện dương trong 1 mol nguyên tử C (Z=6)? (Chỉ ghi số mũ của 10, ví dụ 6,02x10^23 thì ghi 23, ở đây hỏi số lượng hạt p nhân N_A)?
Câu 58. (Vận dụng cao) Tổng số hạt trong ion Cl- (Z=17, A=35)?
Câu 59. (Vận dụng cao) Số e độc thân của Cr (Z=24)?
Câu 60. (Vận dụng cao) Tổng số hạt trong ion Na+ (Z=11, A=23)?`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "C,C,B,A,C,B,C,B,C,B,C,B,C,B,C,A,B,C,B,C,B,C,A,B,B,B,B,C,B,A,B,B,B,B,B,C,C,A,C,B,B,B,A,C,C,C,D,B,B,C,B,B,C,A,C,C,B,B,A,A,D,C,B,C,B,A,B,B,C,B,B,C,B,C,B,B,A,C,B,C,B,C,B,B,C,C,B,C,C,B,B,B,B,A,B,B,A,C,A,B".split(
      ",",
    );
  const ansTFList = [
    "ĐĐSĐ",
    "ĐSĐĐ",
    "SĐSĐ",
    "ĐĐSS",
    "ĐSĐS",
    "ĐSĐĐ",
    "SĐĐĐ",
    "ĐĐSS",
    "ĐSSĐ",
    "SĐĐS",
    "SĐĐS",
    "ĐSĐS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐSSS",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐSSS",
    "ĐĐSS",
    "ĐSĐS",
    "ĐSĐĐ",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "SĐSĐ",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐSS",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "SĐĐĐ",
    "ĐĐSS",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "ĐSĐĐ",
    "ĐSSS",
    "SĐSS",
    "ĐĐĐĐ",
    "SĐĐS",
  ];
  const ansSAList =
    "1|-1|13|20|1,66|10000|4|12|2|6|10|14|2|8|18|N|3|5|3|2|6|1|2|3|8|4|8|0|0,00055|0|4|2|20|10|3|4|2|3|6|19|7|10|7|9|2|35,5|20|34|146|2|6|8|65|22|10|11|6,02|53|6|33".split(
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
