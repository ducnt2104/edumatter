const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `
Câu 1. Quy tắc octet phát biểu rằng nguyên tử các nguyên tố nhóm A có xu hướng đạt được cấu hình electron bền vững của khí hiếm với bao nhiêu electron ở lớp ngoài cùng?
A. 2
B. 6
C. 8
D. 10

Câu 2. Nguyên tử nào sau đây đã có lớp electron ngoài cùng bền vững theo quy tắc octet?
A. Na (Z = 11)
B. Cl (Z = 17)
C. Ne (Z = 10)
D. Al (Z = 13)

Câu 3. Để đạt cấu hình bền vững của khí hiếm helium, nguyên tử hydrogen cần có bao nhiêu electron ở lớp ngoài cùng?
A. 1
B. 2
C. 8
D. 4

Câu 4. Liên kết ion được hình thành bởi lực hút nào sau đây?
A. Lực hút tĩnh điện giữa các ion trái dấu
B. Lực hút giữa các hạt nhân nguyên tử
C. Lực dùng chung cặp electron
D. Lực tương tác van der Waals

Câu 5. Cation là loại ion mang điện tích gì?
A. Điện tích âm
B. Điện tích dương
C. Không mang điện
D. Điện tích trung hòa

Câu 6. Anion là loại ion mang điện tích gì?
A. Điện tích âm
B. Điện tích dương
C. Không mang điện
D. Điện tích biến thiên

Câu 7. Liên kết cộng hóa trị được hình thành giữa hai nguyên tử bằng:
A. Lực hút tĩnh điện
B. Một hoặc nhiều cặp electron dùng chung
C. Sự nhường nhận electron
D. Sự cho nhận proton

Câu 8. Liên kết cộng hóa trị không phân cực thường hình thành giữa:
A. Hai nguyên tử giống nhau
B. Một kim loại và một phi kim
C. Hai nguyên tử có độ âm điện chênh lệch lớn
D. Hai ion trái dấu

Câu 9. Liên kết sigma (σ) hình thành do sự xen phủ AO theo cách nào?
A. Xen phủ bên
B. Xen phủ trục
C. Xen phủ song song
D. Không xen phủ

Câu 10. Liên kết pi (π) hình thành do sự xen phủ AO theo cách nào?
A. Xen phủ bên
B. Xen phủ trục
C. Xen phủ chéo
D. Xen phủ tâm

Câu 11. Kí hiệu của liên kết cho - nhận là:
A. Dấu gạch ngang (-)
B. Dấu mũi tên (→)
C. Dấu ba chấm (...)
D. Dấu cộng (+)

Câu 12. Liên kết hydrogen thường hình thành giữa nguyên tử H đã liên kết với nguyên tử có độ âm điện lớn như:
A. C, S, P
B. N, O, F
C. Na, K, Li
D. He, Ne, Ar

Câu 13. Tương tác van der Waals là lực tương tác giữa các:
A. Ion
B. Nguyên tử trong phân tử
C. Phân tử
D. Hạt nhân

Câu 14. Hợp chất ion thường tồn tại ở trạng thái nào ở điều kiện thường?
A. Thể khí
B. Thể lỏng
C. Thể rắn
D. Thể plasma

Câu 15. Tinh thể muối ăn (NaCl) có dạng hình học gì?
A. Hình chóp
B. Hình lập phương
C. Hình tứ diện
D. Hình đường thẳng

Câu 16. Để đạt cấu hình khí hiếm, nguyên tử Sodium (Z = 11) có xu hướng:
A. Nhận 1 electron
B. Nhường 1 electron
C. Góp chung 2 electron
D. Nhường 7 electron

Câu 17. Để đạt cấu hình khí hiếm, nguyên tử Chlorine (Z = 17) có xu hướng:
A. Nhận 1 electron
B. Nhường 1 electron
C. Nhường 7 electron
D. Góp chung 8 electron

Câu 18. Nguyên tử Magnesium (Z = 12) nhường 2 electron sẽ tạo thành ion nào?
A. Mg+
B. Mg2+
C. Mg-
D. Mg2-

Câu 19. Nguyên tử Oxygen (Z = 8) nhận 2 electron sẽ tạo thành ion nào?
A. O+
B. O2+
C. O-
D. O2-

Câu 20. Tên gọi của ion Na+ là:
A. Anion sodium
B. Cation sodium
C. Nguyên tử sodium
D. Phân tử sodium

Câu 21. Liên kết trong phân tử H2 thuộc loại liên kết nào?
A. Liên kết ion
B. Liên kết cộng hóa trị phân cực
C. Liên kết cộng hóa trị không phân cực
D. Liên kết hydrogen

Câu 22. Liên kết trong phân tử HCl thuộc loại liên kết nào?
A. Liên kết ion
B. Liên kết cộng hóa trị phân cực
C. Liên kết cộng hóa trị không phân cực
D. Liên kết hydrogen

Câu 23. Năng lượng liên kết (Eb) càng lớn thì liên kết đó:
A. Càng bền
B. Càng yếu
C. Càng dễ bị phá vỡ
D. Càng dài

Câu 24. Cặp electron dùng chung trong phân tử cộng hóa trị phân cực sẽ lệch về phía:
A. Nguyên tử có bán kính lớn hơn
B. Nguyên tử có độ âm điện lớn hơn
C. Nguyên tử có độ âm điện nhỏ hơn
D. Chính giữa hai nguyên tử

Câu 25. Liên kết hydrogen được biểu diễn bằng kí hiệu nào?
A. Gạch đơn (-)
B. Gạch đôi (=)
C. Dấu ba chấm (...)
D. Mũi tên (→)

Câu 26. Hiện tượng nước đá nhẹ hơn nước lỏng là do:
A. Cấu trúc tinh thể rỗng của nước đá
B. Nước đá có khối lượng nhỏ hơn
C. Nước lỏng có liên kết cộng hóa trị
D. Nước đá không có liên kết hydrogen

Câu 27. Nguyên tử trung tâm trong phân tử H2O có trạng thái lai hóa nào?
A. sp
B. sp2
C. sp3
D. sp3d

Câu 28. Phân tử CO2 có dạng hình học gì?
A. Gấp khúc
B. Đường thẳng
C. Tam giác
D. Tứ diện

Câu 29. Phân tử CH4 có dạng hình học gì?
A. Đường thẳng
B. Tam giác
C. Tứ diện
D. Chóp tam giác

Câu 30. Sự bám dính của chân tắc kè trên bề mặt trơn nhẵn được giải thích bằng:
A. Liên kết ion
B. Liên kết cộng hóa trị
C. Tương tác van der Waals
D. Liên kết hydrogen

Câu 31. Khí hiếm Helium (He) có bao nhiêu electron ở lớp ngoài cùng?
A. 2
B. 8
C. 18
D. 0

Câu 32. Nguyên tố kim loại có 3 electron lớp ngoài cùng thường có xu hướng:
A. Nhận 5 electron
B. Nhường 3 electron
C. Nhường 1 electron
D. Góp chung 3 electron

Câu 33. Nguyên tố phi kim có 6 electron lớp ngoài cùng thường có xu hướng:
A. Nhường 6 electron
B. Nhận 2 electron
C. Nhận 6 electron
D. Nhường 2 electron

Câu 34. Liên kết đơn giữa hai nguyên tử gồm bao nhiêu cặp electron chung?
A. 1
B. 2
C. 3
D. 4

Câu 35. Liên kết đôi giữa hai nguyên tử gồm bao nhiêu cặp electron chung?
A. 1
B. 2
C. 3
D. 4

Câu 36. Liên kết ba giữa hai nguyên tử gồm bao nhiêu cặp electron chung?
A. 1
B. 2
C. 3
D. 4

Câu 37. Hợp chất nào sau đây có liên kết ion?
A. H2O
B. CO2
C. NaCl
D. NH3

Câu 38. Phân tử nào sau đây có liên kết cộng hóa trị không phân cực?
A. HCl
B. N2
C. H2O
D. NH3

Câu 39. Tương tác van der Waals làm nhiệt độ sôi của các chất:
A. Tăng lên
B. Giảm đi
C. Không đổi
D. Biến mất

Câu 40. DNA giữ được cấu trúc xoắn đôi nhờ loại liên kết nào?
A. Liên kết ion
B. Liên kết cộng hóa trị
C. Liên kết hydrogen
D. Tương tác van der Waals

Câu 41. (Thông hiểu) Tại sao các nguyên tử lại có xu hướng tạo thành liên kết hóa học?
A. Để giảm số lượng electron
B. Để đạt cấu hình electron bền vững như khí hiếm
C. Để tăng khối lượng nguyên tử
D. Để thay đổi số hiệu nguyên tử

Câu 42. (Thông hiểu) Bản chất của liên kết trong phân tử KCl là:
A. Sự dùng chung electron giữa K và Cl
B. Lực hút tĩnh điện giữa cation K+ và anion Cl-
C. Sự xen phủ AO giữa K và Cl
D. Lực tương tác yếu van der Waals

Câu 43. (Thông hiểu) Phân tử BF3 là một ngoại lệ của quy tắc octet vì nguyên tử trung tâm B có bao nhiêu electron lớp ngoài cùng?
A. 4
B. 6
C. 10
D. 12

Câu 44. (Thông hiểu) Phân tử PCl5 có bao nhiêu electron xung quanh nguyên tử trung tâm P?
A. 6
B. 8
C. 10
D. 12

Câu 45. (Thông hiểu) Đặc điểm nào sau đây KHÔNG phải của hợp chất ion?
A. Nhiệt độ nóng chảy cao
B. Dễ tan trong nước
C. Dẫn điện ở trạng thái rắn
D. Dẫn điện khi nóng chảy hoặc pha thành dung dịch

Câu 46. (Thông hiểu) Liên kết sigma (σ) bền hơn liên kết pi (π) vì:
A. Vùng xen phủ AO lớn hơn
B. Xen phủ trục chắc chắn hơn xen phủ bên
C. Khoảng cách hạt nhân gần hơn
D. Cả A và B đều đúng

Câu 47. (Thông hiểu) Trong phân tử H2O, cặp electron dùng chung lệch về phía Oxygen vì:
A. Oxygen có bán kính nhỏ hơn
B. Oxygen có độ âm điện lớn hơn Hydrogen
C. Oxygen có nhiều electron hơn
D. Oxygen là khí

Câu 48. (Thông hiểu) Tại sao nước (H2O) có nhiệt độ sôi cao hơn H2S?
A. H2O có khối lượng phân tử lớn hơn
B. H2O có liên kết hydrogen giữa các phân tử
C. H2O có liên kết cộng hóa trị bền hơn
D. H2S là chất khí độc

Câu 49. (Thông hiểu) Sự hình thành liên kết cho - nhận trong ion NH4+ là do:
A. N nhường 1 electron cho H+
B. Cặp electron riêng của N dùng chung với ion H+
C. H nhường 1 electron cho N
D. N và H góp chung mỗi bên 1 electron

Câu 50. (Thông hiểu) Một liên kết ba thường bao gồm:
A. 3 liên kết sigma
B. 3 liên kết pi
C. 1 liên kết sigma và 2 liên kết pi
D. 2 liên kết sigma và 1 liên kết pi

Câu 51. (Thông hiểu) Các hợp chất ion dễ tan trong nước vì:
A. Nước là dung môi phân cực
B. Nước có liên kết hydrogen
C. Nước có thể phá vỡ mạng tinh thể ion
D. Cả A và C đều đúng

Câu 52. (Thông hiểu) Tương tác van der Waals hình thành do sự xuất hiện của:
A. Các ion
B. Các lưỡng cực tạm thời và lưỡng cực cảm ứng
C. Các hạt proton
D. Các cặp electron dùng chung

Câu 53. (Thông hiểu) Độ bền của liên kết cộng hóa trị phụ thuộc chủ yếu vào:
A. Năng lượng liên kết
B. Trạng thái vật lí của chất
C. Màu sắc của chất
D. Số lượng neutron

Câu 54. (Thông hiểu) Phân tử NH3 có dạng chóp tam giác thay vì tam giác phẳng là do:
A. N có độ âm điện lớn
B. Sự đẩy của cặp electron riêng trên nguyên tử N
C. Liên kết N-H phân cực
D. Khối lượng nguyên tử N lớn

Câu 55. (Thông hiểu) Liên kết hydrogen ảnh hưởng đến độ tan của chất như thế nào?
A. Làm giảm độ tan trong nước
B. Làm tăng độ tan trong nước nếu tạo được liên kết hydrogen với nước
C. Không ảnh hưởng đến độ tan
D. Chỉ làm tan các kim loại

Câu 56. (Thông hiểu) Trong thí nghiệm nuôi tinh thể NaCl, tại sao tinh thể lại có dạng lập phương sắc cạnh?
A. Do sự sắp xếp ngẫu nhiên của các phân tử
B. Do sự sắp xếp luân phiên, trật tự của các ion Na+ và Cl- trong mạng tinh thể
C. Do tác động của dây chỉ treo
D. Do nhiệt độ của nước sôi

Câu 57. (Thông hiểu) Liên kết cộng hóa trị phân cực có hiệu độ âm điện (Δχ) nằm trong khoảng nào?
A. 0 ≤ Δχ < 0,4
B. 0,4 ≤ Δχ < 1,7
C. Δχ ≥ 1,7
D. Δχ = 0

Câu 58. (Thông hiểu) Phân tử nào sau đây có liên kết đôi?
A. H2
B. O2
C. N2
D. F2

Câu 59. (Thông hiểu) Phân tử nào sau đây có liên kết ba?
A. H2
B. O2
C. N2
D. Cl2

Câu 60. (Thông hiểu) Một phân tử có 2 cặp electron hóa trị quanh nguyên tử trung tâm và không có cặp electron riêng sẽ có dạng:
A. Gấp khúc
B. Đường thẳng
C. Tứ diện
D. Tam giác phẳng

Câu 61. (Thông hiểu) Hợp chất Al2O3 được hình thành từ:
A. 2 nguyên tử Al và 3 nguyên tử O
B. Ion Al3+ và ion O2-
C. Sự góp chung electron giữa Al và O
D. Lực tương tác van der Waals

Câu 62. (Thông hiểu) Bậc liên kết trong phân tử N2 là bao nhiêu?
A. 1
B. 2
C. 3
D. 4

Câu 63. (Thông hiểu) Năng lượng liên kết của đơn chất halogen giảm dần từ F2 đến I2 là do:
A. Độ âm điện tăng dần
B. Bán kính nguyên tử tăng dần, liên kết dài và yếu hơn
C. Số electron giảm dần
D. Tính kim loại tăng dần

Câu 64. (Thông hiểu) Ý nghĩa của thuyết VSEPR là:
A. Tính toán khối lượng phân tử
B. Dự đoán dạng hình học của phân tử
C. Giải thích màu sắc của chất
D. Xác định nhiệt độ sôi của chất

Câu 65. (Thông hiểu) Ethanol (C2H5OH) tan vô hạn trong nước chủ yếu do:
A. Có khối lượng phân tử nhỏ
B. Có liên kết cộng hóa trị
C. Tạo được liên kết hydrogen với nước
D. Là chất lỏng ở nhiệt độ thường

Câu 66. (Thông hiểu) Cấu hình electron lớp ngoài cùng của ion O2- là:
A. 2s2 2p4
B. 2s2 2p6
C. 3s2 3p6
D. 2s2 2p2

Câu 67. (Thông hiểu) Cấu hình electron lớp ngoài cùng của ion Na+ là:
A. 3s1
B. 2s2 2p6
C. 3s2 3p6
D. 2s2 2p4

Câu 68. (Thông hiểu) Trong liên kết cho - nhận, nguyên tử đóng góp cặp electron gọi là:
A. Nguyên tử nhận
B. Nguyên tử cho
C. Nguyên tử trung hòa
D. Ion âm

Câu 69. (Thông hiểu) Hiện tượng lai hóa sp3 tạo ra bao nhiêu AO lai hóa?
A. 2
B. 3
C. 4
D. 5

Câu 70. (Thông hiểu) Trong mạng tinh thể NaCl, mỗi ion Na+ được bao quanh bởi bao nhiêu ion Cl-?
A. 4
B. 6
C. 8
D. 12

Câu 71. (Vận dụng) Dựa vào giá trị độ âm điện (H = 2,2; Cl = 3,16), hiệu độ âm điện của phân tử HCl là:
A. 0,96
B. 5,36
C. 1,44
D. 0,5

Câu 72. (Vận dụng) Phân tử nào sau đây có liên kết ion (biết độ âm điện: K = 0,82; Cl = 3,16; H = 2,2; O = 3,44)?
A. HCl
B. KCl
C. H2O
D. Cl2

Câu 73. (Vận dụng) Cho các phân tử: O2, N2, F2, Cl2. Phân tử nào có năng lượng liên kết lớn nhất?
A. O2
B. N2
C. F2
D. Cl2

Câu 74. (Vận dụng) Sơ đồ Lewis của phân tử CH4 có bao nhiêu dấu chấm biểu diễn electron xung quanh nguyên tử Carbon?
A. 4
B. 6
C. 8
D. 2

Câu 75. (Vận dụng) Phân tử CO2 không phân cực dù liên kết C=O phân cực là do:
A. Độ âm điện của C và O bằng nhau
B. Phân tử có cấu trúc đường thẳng đối xứng, các vectơ momen lưỡng cực triệt tiêu nhau
C. C và O đều là phi kim
D. Phân tử ở trạng thái khí

Câu 76. (Vận dụng) Bán kính của ion Na+ nhỏ hơn bán kính nguyên tử Na vì:
A. Na+ mất đi lớp electron thứ 3
B. Lực hút của hạt nhân lên các electron còn lại mạnh hơn
C. Na+ có nhiều proton hơn
D. Cả A và B đều đúng

Câu 77. (Vận dụng) Số liên kết sigma (σ) và liên kết pi (π) trong phân tử C2H2 (H-C≡C-H) lần lượt là:
A. 2σ và 3π
B. 3σ và 2π
C. 1σ và 2π
D. 5σ và 0π

Câu 78. (Vận dụng) Phân tử nào sau đây có thể tạo liên kết hydrogen giữa các phân tử cùng loại?
A. CH4
B. NH3
C. H2S
D. PH3

Câu 79. (Vận dụng) Trong phân tử BeH2, nguyên tử Be có trạng thái lai hóa nào?
A. sp
B. sp2
C. sp3
D. sp3d

Câu 80. (Vận dụng) Phân tử H2O có góc liên kết xấp xỉ 104,5 độ thay vì 109,5 độ của tứ diện đều là do:
A. Lực đẩy của 2 cặp electron riêng mạnh hơn các cặp electron liên kết
B. Oxygen có độ âm điện quá lớn
C. Hydrogen có kích thước quá nhỏ
D. Sự xen phủ AO không hoàn toàn

Câu 81. (Vận dụng) Hợp chất X được tạo bởi kim loại M (nhóm IIA) và phi kim Y (nhóm VIIA). Công thức của X là:
A. MY
B. M2Y
C. MY2
D. M7Y2

Câu 82. (Vận dụng) Tổng số electron hóa trị trong phân tử CO2 là bao nhiêu?
A. 8
B. 12
C. 16
D. 20

Câu 83. (Vận dụng) Kiểu xen phủ giữa 2 AO p theo trục dọc nối tâm hai hạt nhân tạo ra:
A. Liên kết sigma (s-p)
B. Liên kết sigma (p-p)
C. Liên kết pi (p-p)
D. Liên kết ion

Câu 84. (Vận dụng) Cho cấu hình electron của X: 1s2 2s2 2p6 3s1 và Y: 1s2 2s2 2p5. Liên kết giữa X và Y là:
A. Cộng hóa trị
B. Ion
C. Hydrogen
D. Cho nhận

Câu 85. (Vận dụng) Năng lượng cần thiết để phá vỡ 1 mol liên kết H-H là 436 kJ/mol. Đây được gọi là:
A. Nhiệt phản ứng
B. Năng lượng liên kết
C. Độ âm điện
D. Ái lực electron

Câu 86. (Vận dụng) Cấu trúc hình học của phân tử BF3 là:
A. Tứ diện
B. Tam giác phẳng
C. Đường thẳng
D. Chóp tam giác

Câu 87. (Vận dụng) Trong phân tử NH4Cl có những loại liên kết nào?
A. Liên kết ion và liên kết cộng hóa trị
B. Chỉ có liên kết ion
C. Chỉ có liên kết cộng hóa trị
D. Liên kết ion và liên kết hydrogen

Câu 88. (Vận dụng) Tương tác van der Waals tăng lên khi:
A. Khối lượng phân tử tăng
B. Kích thước phân tử tăng
C. Độ phân cực tạm thời tăng
D. Cả A, B, C đều đúng

Câu 89. (Vận dụng) Vẽ sơ đồ Lewis cho ion Hydronium (H3O+), số cặp electron riêng còn lại trên Oxygen là:
A. 0
B. 1
C. 2
D. 3

Câu 90. (Vận dụng) Sự hình thành phân tử MgO được mô tả bằng sự chuyển electron như thế nào?
A. Mg nhường 2e cho O
B. O nhường 2e cho Mg
C. Mg và O góp chung 2e
D. Mg nhường 1e cho O

Câu 91. (Vận dụng cao) Hợp chất A được tạo bởi ion M2+ và X2-. Tổng số hạt trong A là 60. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 20. Biết số khối của M lớn hơn X là 8. Công thức của A là:
A. MgO
B. CaO
C. CaS
D. MgS

Câu 92. (Vận dụng cao) Phân tử SO2 có dạng hình học gấp khúc (góc liên kết khoảng 119 độ). Nguyên tử S ở trạng thái lai hóa nào?
A. sp
B. sp2
C. sp3
D. Không lai hóa

Câu 93. (Vận dụng cao) Giải thích tại sao Cl2 là chất khí, Br2 là chất lỏng, còn I2 là chất rắn ở nhiệt độ thường?
A. Do liên kết cộng hóa trị bền dần
B. Do tương tác van der Waals tăng dần theo sự tăng khối lượng và kích thước phân tử
C. Do độ âm điện giảm dần
D. Do tính phi kim giảm dần

Câu 94. (Vận dụng cao) Một hợp chất ion tạo bởi cation X+ và anion Y2-. Tổng số electron trong phân tử là 30. X, Y thuộc các chu kì nhỏ. Công thức của hợp chất là:
A. Na2O
B. Li2O
C. K2O
D. Na2S

Câu 95. (Vận dụng cao) Năng lượng liên kết Eb của các phân tử: H-F (565), H-Cl (431), H-Br (364), H-I (297) (đơn vị kJ/mol). Thứ tự giảm dần độ bền liên kết là:
A. H-I > H-Br > H-Cl > H-F
B. H-F > H-Cl > H-Br > H-I
C. H-Cl > H-F > H-Br > H-I
D. H-F > H-I > H-Cl > H-Br

Câu 96. (Vận dụng cao) Phân tử nào sau đây có nguyên tử trung tâm không tuân theo quy tắc octet nhưng vẫn bền vững?
A. SF6
B. CH4
C. H2O
D. NH3

Câu 97. (Vận dụng cao) Trong các chất sau: NH3, H2O, CH4, HF. Chất nào có liên kết hydrogen mạnh nhất?
A. NH3
B. H2O
C. CH4
D. HF

Câu 98. (Vận dụng cao) Cho biết tính chất: Tan trong nước, dẫn điện tốt khi tan, nhiệt độ nóng chảy 801 độ C. Chất này có loại liên kết nào?
A. Cộng hóa trị phân cực
B. Cộng hóa trị không phân cực
C. Liên kết ion
D. Liên kết kim loại

Câu 99. (Vận dụng cao) Số lượng liên kết pi (π) tối đa có thể hình thành giữa hai nguyên tử là bao nhiêu?
A. 1
B. 2
C. 3
D. 0

Câu 100. (Vận dụng cao) Tại sao chân tắc kè có thể bám vào kính nhưng không bám được vào các bề mặt chống dính (như teflon)?
A. Teflon không cho phép hình thành tương tác van der Waals đủ mạnh
B. Teflon quá trơn
C. Tắc kè không thích teflon
D. Do kính có liên kết ion
`;

  const rawTF = `
Câu 1. Về quy tắc Octet:
a) Nguyên tử có xu hướng đạt 8 electron lớp ngoài cùng để bền vững.
b) Helium là khí hiếm nhưng chỉ có 2 electron lớp ngoài cùng.
c) Mọi phân tử đều phải tuân thủ tuyệt đối quy tắc octet.
d) Kim loại có xu hướng nhận thêm electron để đạt octet.

Câu 2. Về liên kết ion:
a) Hình thành giữa kim loại điển hình và phi kim điển hình.
b) Bản chất là lực hút tĩnh điện giữa các ion trái dấu.
c) Liên kết ion có tính định hướng rất rõ rệt.
d) Hợp chất ion thường dễ bay hơi ở nhiệt độ phòng.

Câu 3. Về liên kết cộng hóa trị:
a) Hình thành bằng cặp electron dùng chung.
b) Liên kết cộng hóa trị không phân cực có hiệu độ âm điện lớn hơn 1,7.
c) Liên kết đơn luôn là liên kết sigma.
d) Liên kết cho - nhận là một trường hợp đặc biệt của liên kết cộng hóa trị.

Câu 4. Về liên kết Hydrogen:
a) Là liên kết hình thành giữa nguyên tử H và mọi nguyên tử khác.
b) Làm tăng nhiệt độ sôi của chất.
c) Giải thích tại sao nước đá nổi trên mặt nước lỏng.
d) Có độ bền lớn hơn liên kết cộng hóa trị.

Câu 5. Về tương tác van der Waals:
a) Là lực tương tác yếu giữa các phân tử.
b) Xuất hiện do các lưỡng cực tạm thời.
c) Tương tác này càng mạnh khi phân tử có khối lượng càng lớn.
d) Chân tắc kè bám dính nhờ loại tương tác này.

Câu 6. Về tinh thể muối ăn (NaCl):
a) Có cấu trúc mạng tinh thể lập phương tâm mặt.
b) Mỗi ion Na+ được bao quanh bởi 6 ion Cl-.
c) Có thể dẫn điện ở trạng thái rắn.
d) Có nhiệt độ nóng chảy rất cao.

Câu 7. Về lai hóa và hình học phân tử:
a) Lai hóa sp2 tạo ra hình tam giác phẳng.
b) Phân tử CH4 có dạng hình tứ diện đều.
c) Phân tử H2O có dạng đường thẳng.
d) Thuyết VSEPR giúp dự đoán dạng hình học phân tử.

Câu 8. Về năng lượng liên kết:
a) Năng lượng liên kết Eb đặc trưng cho độ bền của liên kết.
b) Eb càng nhỏ, liên kết càng bền.
c) Liên kết ba có Eb lớn hơn liên kết đơn giữa cùng hai nguyên tử.
d) Đơn vị của Eb thường là kJ/mol.

Câu 9. Về sự xen phủ orbital:
a) Xen phủ trục tạo ra liên kết sigma.
b) Xen phủ bên tạo ra liên kết pi.
c) Liên kết pi bền hơn liên kết sigma.
d) Xen phủ s-s chỉ có thể tạo ra liên kết sigma.

Câu 10. Về độ âm điện và liên kết:
a) Hiệu độ âm điện bằng 0 là liên kết cộng hóa trị không cực.
b) Hiệu độ âm điện lớn hơn 1,7 chắc chắn là liên kết ion.
c) Cặp electron dùng chung lệch về nguyên tử có độ âm điện lớn hơn.
d) Độ âm điện không ảnh hưởng đến tính phân cực của liên kết.

Câu 11. Cho các nguyên tử: Na (Z=11), Cl (Z=17), O (Z=8):
a) Na có xu hướng nhường 1e tạo Na+.
b) Cl có xu hướng nhận 1e tạo Cl-.
c) Liên kết giữa Na và Cl là liên kết ion.
d) Liên kết giữa Cl và O là liên kết ion.

Câu 12. Về phân tử CO2:
a) Có liên kết đôi C=O.
b) Là phân tử phân cực.
c) Có dạng hình học đường thẳng.
d) Nguyên tử C ở trạng thái lai hóa sp.

Câu 13. Về phân tử NH3:
a) Có 3 liên kết cộng hóa trị phân cực.
b) Có dạng hình học chóp tam giác.
c) Có một cặp electron riêng trên nguyên tử Nitrogen.
d) Có thể tạo liên kết hydrogen giữa các phân tử.

Câu 14. Về phân tử H2O:
a) Có dạng hình học gấp khúc.
b) Góc liên kết khoảng 104,5 độ.
c) Là dung môi không phân cực.
d) Có liên kết hydrogen liên phân tử.

Câu 15. Về liên kết trong DNA và Protein:
a) Liên kết hydrogen giữ vai trò làm bền cấu trúc DNA.
b) DNA có cấu trúc xoắn đôi.
c) Tương tác van der Waals không có vai trò gì trong sinh học.
d) Các liên kết yếu giúp các đại phân tử sinh học có cấu trúc linh hoạt.

Câu 16. (Thông hiểu) Về các ngoại lệ octet:
a) PCl5 có nguyên tử trung tâm có 10 electron lớp ngoài cùng.
b) NO có tổng số electron hóa trị là số lẻ.
c) BF3 có nguyên tử B chỉ có 6 electron lớp ngoài cùng.
d) Mọi nguyên tố nhóm B đều tuân thủ quy tắc octet.

Câu 17. (Thông hiểu) Về tính chất vật lí hợp chất:
a) Hợp chất ion thường tan tốt trong các dung môi không phân cực như benzene.
b) Hợp chất cộng hóa trị có nhiệt độ sôi thấp hơn hợp chất ion.
c) Các phân tử có liên kết hydrogen dễ tan trong nước.
d) Các chất khí ở điều kiện thường thường là hợp chất cộng hóa trị không cực.

Câu 18. (Thông hiểu) Về liên kết cho - nhận:
a) Chỉ xảy ra khi một nguyên tử còn cặp electron riêng và nguyên tử kia còn AO trống.
b) Ion NH4+ có 1 liên kết cho - nhận.
c) Kí hiệu bằng mũi tên từ nguyên tử nhận sang nguyên tử cho.
d) Về mặt bản chất, sau khi hình thành nó giống các liên kết cộng hóa trị khác.

Câu 19. (Thông hiểu) Về thuyết lai hóa:
a) Giúp giải thích dạng hình học của phân tử.
b) Các AO lai hóa có năng lượng và hình dạng giống hệt nhau.
c) Lai hóa sp3 tạo ra 4 AO lai hóa hướng về 4 đỉnh của hình tứ diện.
d) Nguyên tử trung tâm trong CO2 lai hóa sp3.

Câu 20. (Thông hiểu) Về mạng tinh thể:
a) Tinh thể ion gồm các phân tử riêng rẽ.
b) Trong tinh thể NaCl, lực liên kết là lực hút tĩnh điện.
c) Tinh thể rỗng của nước đá làm giảm khối lượng riêng của nó.
d) Tương tác van der Waals là lực giữ các phân tử trong tinh thể phân tử.

Câu 21. (Thông hiểu) So sánh các loại liên kết:
a) Liên kết ion mạnh hơn liên kết cộng hóa trị trong nhiều trường hợp.
b) Liên kết hydrogen yếu hơn liên kết cộng hóa trị.
c) Tương tác van der Waals là loại liên kết yếu nhất.
d) Liên kết pi mạnh hơn liên kết sigma.

Câu 22. (Thông hiểu) Về sự hình thành ion:
a) Kim loại nhường e tạo Cation.
b) Phi kim nhận e tạo Anion.
c) Bán kính Cation luôn lớn hơn bán kính nguyên tử tương ứng.
d) Bán kính Anion luôn lớn hơn bán kính nguyên tử tương ứng.

Câu 23. (Thông hiểu) Về công thức Lewis:
a) Sử dụng dấu chấm để biểu diễn electron hóa trị.
b) Giúp xác định số cặp electron liên kết.
c) Giúp xác định số cặp electron riêng.
d) Chỉ dùng được cho các hợp chất ion.

Câu 24. (Thông hiểu) Về các yếu tố ảnh hưởng nhiệt độ sôi:
a) Khối lượng phân tử càng lớn, nhiệt độ sôi càng cao (do van der Waals).
b) Liên kết hydrogen làm tăng đáng kể nhiệt độ sôi.
c) Liên kết cộng hóa trị càng bền thì nhiệt độ sôi càng cao.
d) Cấu trúc phân tử càng gọn thì tương tác van der Waals càng mạnh.

Câu 25. (Vận dụng) Cho phân tử N2:
a) Có liên kết ba giữa hai nguyên tử Nitrogen.
b) Gồm 1 liên kết sigma và 2 liên kết pi.
c) Rất bền vững ở nhiệt độ thường.
d) Là phân tử phân cực mạnh.

Câu 26. (Vận dụng) Cho phân tử CH4:
a) Nguyên tử C ở trạng thái lai hóa sp3.
b) Có 4 liên kết cộng hóa trị không phân cực.
c) Có dạng hình học tứ diện đều.
*d) Tan tốt trong nước do tạo được liên kết hydrogen.

Câu 27. (Vận dụng) So sánh H2O và H2S:
a) H2O có liên kết hydrogen, H2S thì không.
b) Nhiệt độ sôi của H2O cao hơn H2S.
c) Cả hai đều có cấu trúc gấp khúc.
d) Độ âm điện của S lớn hơn O.

Câu 28. (Vận dụng) Cho phân tử C2H4 (CH2=CH2):
a) Có 1 liên kết đôi C=C.
b) Có tổng cộng 5 liên kết sigma.
c) Có 1 liên kết pi.
d) Các nguyên tử Carbon ở trạng thái lai hóa sp2.

Câu 29. (Vận dụng) Về sự tan của các chất:
a) NaCl tan trong nước tạo ra các ion tự do.
b) HCl tan trong nước do phản ứng tạo ion.
c) NH3 tan tốt trong nước do tạo liên kết hydrogen.
d) CH4 tan tốt trong nước do tương tác van der Waals.

Câu 30. (Vận dụng) Về năng lượng liên kết:
a) Eb (Cl-Cl) = 243 kJ/mol; Eb (Br-Br) = 193 kJ/mol.
b) Cl2 bền hơn Br2.
c) Độ dài liên kết Cl-Cl ngắn hơn Br-Br.
d) Năng lượng liên kết tỉ lệ thuận với độ dài liên kết.

Câu 31. (Vận dụng cao) Về lai hóa và hình học:
a) Phân tử có 4 cặp electron xung quanh nguyên tử trung tâm luôn có dạng tứ diện đều.
b) Nếu có cặp electron riêng, góc liên kết sẽ bị thu hẹp lại.
c) Trong NH3, góc liên kết là 107 độ.
d) Trong H2O, góc liên kết là 104,5 độ.

Câu 32. (Vận dụng cao) Về tương tác van der Waals ở các khí hiếm:
a) Từ He đến Rn, nhiệt độ sôi tăng dần.
b) Nguyên nhân là do khối lượng nguyên tử và số electron tăng dần.
c) Khả năng xuất hiện lưỡng cực tạm thời tăng dần.
d) Các khí hiếm không có tương tác van der Waals.

Câu 33. (Vận dụng cao) Về cấu trúc nước đá:
a) Mỗi phân tử nước liên kết hydrogen với 4 phân tử nước khác.
b) Tạo ra cấu trúc mạng lưới không gian hở (rỗng).
c) Khi tan chảy, một số liên kết hydrogen bị đứt, các phân tử nước xếp khít nhau hơn.
d) Thể tích nước đá nhỏ hơn thể tích nước lỏng cùng khối lượng.

Câu 34. (Vận dụng cao) Về phân loại liên kết dựa trên Δχ:
a) Quy tắc Δχ chỉ mang tính tương đối.
b) HCl (Δχ = 0,96) là cộng hóa trị phân cực.
c) AlCl3 (Δχ = 1,5) thường được coi là hợp chất cộng hóa trị dù là kim loại - phi kim.
d) HF (Δχ = 1,78) là hợp chất ion.

Câu 35. (Vận dụng cao) Về liên kết cho - nhận trong O3 (Ozone):
a) Phân tử O3 có cấu trúc gấp khúc.
b) Có một liên kết đôi và một liên kết cho - nhận.
c) Ozone bền hơn Oxygen (O2).
d) Cả 3 nguyên tử Oxygen đều tuân thủ quy tắc octet.

Câu 36. (Vận dụng cao) Về sự hình thành ion đa nguyên tử:
a) Ion NH4+ được hình thành từ NH3 và H+.
b) Trong NH4+, tất cả 4 liên kết N-H đều tương đương nhau.
c) Ion OH- được hình thành do O nhận thêm 1e rồi liên kết với H.
d) Liên kết trong các ion đa nguyên tử là liên kết cộng hóa trị.

Câu 37. (Vận dụng cao) Về tính chất của chân tắc kè:
a) Hàng triệu sợi lông cực nhỏ (setae) tạo ra diện tích tiếp xúc rất lớn.
b) Lực van der Waals giữa các sợi lông và bề mặt kính giúp bám dính.
c) Tắc kè bám dính bằng các chất keo lỏng tiết ra từ chân.
d) Đây là một ứng dụng của các liên kết yếu trong tự nhiên.

Câu 38. (Vận dụng cao) Về liên kết hydrogen nội phân tử (liên hệ):
a) Chỉ xảy ra giữa các phân tử khác nhau.
b) Có thể xảy ra trong cùng một phân tử nếu có các nhóm chức phù hợp ở vị trí gần nhau.
c) Ảnh hưởng đến tính chất vật lí khác với liên kết hydrogen liên phân tử.
d) Làm giảm nhiệt độ sôi so với liên kết hydrogen liên phân tử.

Câu 39. (Vận dụng cao) Về năng lượng liên kết Eb và nhiệt phản ứng:
a) Phản ứng tỏa nhiệt khi tổng Eb của các chất đầu nhỏ hơn tổng Eb của các sản phẩm.
b) Phá vỡ liên kết luôn cần cung cấp năng lượng.
c) Hình thành liên kết luôn giải phóng năng lượng.
d) Eb không có liên quan gì đến nhiệt hóa học.

Câu 40. (Vận dụng cao) Về sự biến đổi của liên kết:
a) Liên kết đơn là bền nhất.
b) Độ dài liên kết giảm khi bậc liên kết tăng.
c) Năng lượng liên kết tăng khi bậc liên kết tăng.
d) Liên kết cộng hóa trị luôn chuyển sang liên kết ion khi nhiệt độ tăng.
`;

  const rawSA = `
Câu 1. Theo quy tắc octet, các nguyên tử có xu hướng đạt cấu hình electron bền vững với bao nhiêu electron ở lớp ngoài cùng?
Câu 2. Riêng nguyên tử Helium (He) đạt cấu hình bền vững với bao nhiêu electron ở lớp ngoài cùng?
Câu 3. Số hiệu nguyên tử Z của nguyên tố Sodium là bao nhiêu?
Câu 4. Số hiệu nguyên tử Z của nguyên tố Chlorine là bao nhiêu?
Câu 5. Số hiệu nguyên tử Z của nguyên tố Neon là bao nhiêu?
Câu 6. Số hiệu nguyên tử Z của nguyên tố Argon là bao nhiêu?
Câu 7. Nguyên tử các nguyên tố nhóm IA có bao nhiêu electron ở lớp ngoài cùng?
Câu 8. Nguyên tử các nguyên tố nhóm IIA có bao nhiêu electron ở lớp ngoài cùng?
Câu 9. Nguyên tử các nguyên tố nhóm VIIA có bao nhiêu electron ở lớp ngoài cùng?
Câu 10. Nguyên tử các nguyên tố nhóm VIA có bao nhiêu electron ở lớp ngoài cùng?
Câu 11. Nguyên tử các nguyên tố nhóm VA có bao nhiêu electron ở lớp ngoài cùng?
Câu 12. Khi hình thành ion Sodium (Na+), nguyên tử Sodium đã nhường đi bao nhiêu electron?
Câu 13. Khi hình thành ion Magnesium (Mg2+), nguyên tử Magnesium đã nhường đi bao nhiêu electron?
Câu 14. Khi hình thành ion Chlorine (Cl-), nguyên tử Chlorine đã nhận vào bao nhiêu electron?
Câu 15. Khi hình thành ion Oxygen (O2-), nguyên tử Oxygen đã nhận vào bao nhiêu electron?
Câu 16. Trong tinh thể NaCl, một ion Na+ được bao quanh bởi bao nhiêu ion Cl-?
Câu 17. Trong tinh thể NaCl, một ion Cl- được bao quanh bởi bao nhiêu ion Na+?
Câu 18. Liên kết đơn được hình thành bởi bao nhiêu cặp electron dùng chung?
Câu 19. Liên kết đôi được hình thành bởi bao nhiêu cặp electron dùng chung?
Câu 20. Liên kết ba được hình thành bởi bao nhiêu cặp electron dùng chung?
Câu 21. Một cặp electron dùng chung tương ứng với bao nhiêu electron?
Câu 22. Trong phân tử NO, tổng số electron hóa trị của cả phân tử là số lẻ hay chẵn, hãy ghi lại số đó?
Câu 23. Trong phân tử BeH2, nguyên tử Be có bao nhiêu electron ở lớp ngoài cùng?
Câu 24. Trong phân tử BF3, nguyên tử B có bao nhiêu electron ở lớp ngoài cùng?
Câu 25. Trong phân tử PCl5, nguyên tử P có bao nhiêu electron ở lớp ngoài cùng?
Câu 26. Trong phân tử SF6, nguyên tử S có bao nhiêu electron ở lớp ngoài cùng?
Câu 27. Lớp electron thứ 2 (lớp L) có tối đa bao nhiêu electron?
Câu 28. Phân lớp s chứa tối đa bao nhiêu electron?
Câu 29. Phân lớp p chứa tối đa bao nhiêu electron?
Câu 30. Số lượng nguyên tử Oxygen trong một phân tử khí Carbon dioxide (CO2) là bao nhiêu?
Câu 31. (Thông hiểu) Độ âm điện của F theo thang Pauling là bao nhiêu?
Câu 32. (Thông hiểu) Hiệu độ âm điện tối thiểu để tạo liên kết ion là bao nhiêu?
Câu 33. (Thông hiểu) Hiệu độ âm điện tối đa để liên kết không phân cực là bao nhiêu?
Câu 34. (Thông hiểu) Liên kết cộng hóa trị phân cực có Δχ từ 0,4 đến dưới bao nhiêu?

Câu 35. (Thông hiểu) Trong N₂ có bao nhiêu cặp electron dùng chung?
Câu 36. (Thông hiểu) Trong O₂ có bao nhiêu cặp electron dùng chung?
Câu 37. (Thông hiểu) Trong H₂ có bao nhiêu cặp electron dùng chung?

Câu 38. (Thông hiểu) Trong H₂O, O có bao nhiêu cặp electron tự do?
Câu 39. (Thông hiểu) Trong NH₃, N có bao nhiêu cặp electron tự do?

Câu 40. (Thông hiểu) Trong CH₄ có bao nhiêu liên kết sigma?
Câu 41. (Thông hiểu) Trong C₂H₂ có bao nhiêu liên kết pi?

Câu 42. (Thông hiểu) Một phân tử H₂O tạo tối đa bao nhiêu liên kết hydrogen?
Câu 43. (Thông hiểu) Độ âm điện của Cs theo thang Pauling là bao nhiêu?

Câu 44. (Thông hiểu) Al (Z=13) cần nhường bao nhiêu electron để đạt octet?
Câu 45. (Thông hiểu) N (Z=7) cần nhận bao nhiêu electron để đạt octet?
Câu 46. (Vận dụng) Hợp chất từ Al³⁺ và O²⁻ có tổng số nguyên tử trong 1 đơn vị công thức là bao nhiêu?
Câu 47. (Vận dụng) Tổng số electron hóa trị trong H₂O là bao nhiêu?
Câu 48. (Vận dụng) Tổng số electron hóa trị trong CO₂ là bao nhiêu?
Câu 49. (Vận dụng) Tổng số electron hóa trị trong CH₄ là bao nhiêu?

Câu 50. (Vận dụng) Trong C₂H₄ có bao nhiêu liên kết sigma?

Câu 51. (Vận dụng) Tính Δχ của liên kết HCl (H=2,20; Cl=3,16).
Câu 52. (Vận dụng) Tính Δχ của liên kết NaCl (Na=0,93; Cl=3,16).
Câu 53. (Vận dụng) Tính Δχ của liên kết H₂ (H=2,20).

Câu 54. (Vận dụng) Trong N₂ có bao nhiêu liên kết pi?
Câu 55. (Vận dụng) Trong NH₃ có bao nhiêu liên kết sigma?
Câu 56. (Vận dụng cao) Tổng số electron hóa trị trong PCl₅ là bao nhiêu?
Câu 57. (Vận dụng cao) Tổng số electron hóa trị trong SF₆ là bao nhiêu?

Câu 58. (Vận dụng cao) Tổng số proton trong NH₄⁺ là bao nhiêu? (N=7, H=1)
Câu 59. (Vận dụng cao) Tổng số electron trong NH₄⁺ là bao nhiêu? (N=7, H=1)

Câu 60. (Vận dụng cao) Hợp chất RH₄, trong oxit cao nhất R chiếm 46,67% khối lượng. Xác định Z của R (chu kỳ 3).`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "C,C,B,A,B,A,B,A,B,A,B,B,C,C,B,B,A,B,D,B,C,B,A,B,C,A,C,B,C,C,A,B,B,A,B,C,C,B,A,C,B,B,B,C,C,D,B,B,B,C,D,B,A,B,B,B,B,C,B,C,B,B,C,B,C,B,B,A,B,B,B,A,B,B,C,A,C,C,B,B,A,C,B,C,B,C,B,A,A,B,B,B,A,B,B,A,D,C,B,A,A,B,B,A,B,A,D,C,B,A".split(
      ",",
    );
  const ansTFList = [
    "ĐĐSS",
    "ĐĐSS",
    "ĐSĐĐ",
    "SĐĐS",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐSĐ",
    "ĐSĐĐ",
    "ĐĐSĐ",
    "ĐSĐS",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "SĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐSS",
    "ĐĐĐS",
    "ĐSĐS",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "SĐĐĐ",
    "ĐĐĐS",
    "SĐĐS",
  ];
  const ansSAList =
    "8|2|11|17|10|18|1|2|7|6|5|1|2|1|2|6|6|1|2|3|2|11|4|6|10|12|8|2|6|2|3,98|1,7|0,4|1,7|3|2|1|2|1|4|2|4|0,79|3|3|5|8|16|8|5|0,96|2,23|0|2|3|40|48|11|10|14".split(
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
