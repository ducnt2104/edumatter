const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `

Câu 1. Công thức chung của alkane là
A. CnH2n (n ≥ 2).
B. CnH2n+2 (n ≥ 1).
C. CnH2n-2 (n ≥ 2).
D. CnH2n-6 (n ≥ 6).

Câu 2. Hydrocarbon nào sau đây thuộc loại alkane?
A. C2H4.
B. C2H2.
C. C6H6.
D. C3H8.

Câu 3. Ở điều kiện thường, chất nào sau đây ở trạng thái khí?
A. Hexane.
B. Propane.
C. Octane.
D. Benzene.

Câu 4. Phản ứng đặc trưng của alkane là
A. phản ứng cộng.
B. phản ứng thế.
C. phản ứng trùng hợp.
D. phản ứng thủy phân.

Câu 5. Alkane nào sau đây có tên gọi là methane?
A. C2H6.
B. CH4.
C. C3H8.
D. C4H10.

Câu 6. Số nguyên tử hydrogen trong phân tử Ethane là
A. 2.
B. 4.
C. 6.
D. 8.

Câu 7. Công thức chung của alkene là
A. CnH2n+2 (n ≥ 1).
B. CnH2n (n ≥ 2).
C. CnH2n-2 (n ≥ 2).
D. CnH2n-6 (n ≥ 6).

Câu 8. Phân tử nào sau đây có liên kết ba C≡C?
A. Ethylene.
B. Ethane.
C. Acetylene.
D. Benzene.

Câu 9. Alkene C2H4 có tên gọi là
A. Ethane.
B. Ethylene.
C. Acetylene.
D. Methane.

Câu 10. Alkyne C2H2 có tên gọi là
A. Ethylene.
B. Acetylene.
C. Propylene.
D. Methane.

Câu 11. Phản ứng đặc trưng của hydrocarbon không no (alkene, alkyne) là
A. phản ứng thế.
B. phản ứng cộng.
C. phản ứng tách.
D. phản ứng trao đổi.

Câu 12. Công thức chung của alkyne là
A. CnH2n+2.
B. CnH2n.
C. CnH2n-2 (n ≥ 2).
D. CnH2n-6.

Câu 13. Arene (hydrocarbon thơm) là những hydrocarbon trong phân tử có chứa
A. liên kết đôi C=C.
B. liên kết ba C≡C.
C. vòng benzene.
D. liên kết đơn C-C.

Câu 14. Công thức phân tử của benzene là
A. C6H12.
B. C6H6.
C. C6H14.
D. C7H8.

Câu 15. Toluene có công thức phân tử là
A. C6H6.
B. C7H8.
C. C8H10.
D. C6H5CH=CH2.

Câu 16. Phản ứng hóa học nào dùng để nhận biết alk-1-yne?
A. Tác dụng với dung dịch Br2.
B. Tác dụng với dung dịch KMnO4.
C. Tác dụng với dung dịch AgNO3/NH3.
D. Phản ứng cháy.

Câu 17. Chất nào sau đây là chất rắn ở điều kiện thường?
A. Benzene.
B. Toluene.
C. Naphthalene.
D. Xylene.

Câu 18. Số đồng phân cấu tạo của alkane C4H10 là
A. 1.
B. 2.
C. 3.
D. 4.

Câu 19. Thành phần chính của khí thiên nhiên (biogas) là
A. C2H6.
B. C3H8.
C. CH4.
D. C4H10.

Câu 20. Khi đốt cháy hoàn toàn alkane, tỉ lệ số mol CO2 và H2O thỏa mãn
A. nCO2 = nH2O.
B. nCO2 > nH2O.
C. nH2O > nCO2.
D. nH2O = 2nCO2.

Câu 21. Góc liên kết trong phân tử methane là
A. 109,5°.
B. 120°.
C. 180°.
D. 90°.

Câu 22. Số nguyên tử carbon trong phân tử Pentane là
A. 4.
B. 5.
C. 6.
D. 7.

Câu 23. Alkene nào sau đây có đồng phân hình học?
A. CH2=CH-CH3.
B. CH2=CH2.
C. CH3-CH=CH-CH3.
D. (CH3)2C=CH2.

Câu 24. Chất nào sau đây dùng để hàn cắt kim loại (đèn xì)?
A. Methane.
B. Ethylene.
C. Acetylene.
D. Butane.

Câu 25. Sản phẩm của phản ứng trùng hợp ethylene là
A. PVC.
B. PE.
C. PP.
D. PS.

Câu 26. Công thức chung của dãy đồng đẳng benzene là
A. CnH2n-6 (n ≥ 6).
B. CnH2n-2 (n ≥ 2).
C. CnH2n+2 (n ≥ 1).
D. CnH2n (n ≥ 2).

Câu 27. Benzene không tan trong
A. Hexane.
B. Nước.
C. Ethanol.
D. Ether.

Câu 28. Phản ứng thế nguyên tử H của alkane bằng halogen cần điều kiện
A. ánh sáng hoặc nhiệt độ.
B. xúc tác Fe.
C. xúc tác Ni, t°.
D. áp suất cao.

Câu 29. Khí nào sau đây kích thích trái cây nhanh chín?
A. Methane.
B. Ethylene.
C. Acetylene.
D. Ethane.

Câu 30. Số liên kết pi (π) trong phân tử ethylene là
A. 0.
B. 1.
C. 2.
D. 3.

Câu 31. Số liên kết pi (π) trong phân tử acetylene là
A. 1.
B. 2.
C. 3.
D. 4.

Câu 32. Dung dịch chất nào sau đây làm mất màu nước bromine ở điều kiện thường?
A. Ethane.
B. Benzene.
C. Ethylene.
D. Toluene.

Câu 33. Khi đốt cháy alkyne, quan hệ giữa số mol CO2 và H2O là
A. nCO2 < nH2O.
B. nCO2 = nH2O.
C. nCO2 > nH2O.
D. nCO2 = 0,5 nH2O.

Câu 34. Chất nào sau đây thuộc dãy đồng đẳng của benzene?
A. C2H2.
B. C6H12.
C. C8H10.
D. C6H5OH.

Câu 35. Phản ứng reforming alkane có tác dụng
A. tăng mạch carbon.
B. giảm chỉ số octane.
C. biến đổi cấu trúc mạch carbon.
D. tạo ra dẫn xuất halogen.

Câu 36. Alkane C5H12 có mấy đồng phân?
A. 2.
B. 3.
C. 4.
D. 5.

Câu 37. Chất nào sau đây là chất lỏng ở điều kiện thường?
A. Butane.
B. Neopentane.
C. Hexane.
D. Propane.

Câu 38. Phản ứng cộng H2 vào alkyne (xúc tác Lindlar) tạo ra sản phẩm chính là
A. Alkane.
B. Alkene.
C. Arene.
D. Alkyl halide.

Câu 39. Hiện tượng khi cho toluene vào thuốc tím (KMnO4) ở nhiệt độ thường là
A. Mất màu thuốc tím.
B. Có kết tủa đen.
C. Không có hiện tượng.
D. Có khí thoát ra.

Câu 40. Benzoic acid được điều chế từ phản ứng oxi hóa chất nào?
A. Benzene.
B. Toluene.
C. Hexane.
D. Styrene.

Câu 41. (Thông hiểu) Cho phản ứng: Propane + Cl2 (as) -> Sản phẩm chính. Sản phẩm chính là
A. 1-chloropropane.
B. 2-chloropropane.
C. 1,2-dichloropropane.
D. 2,2-dichloropropane.

Câu 42. (Thông hiểu) Quy tắc Markovnikov áp dụng cho phản ứng nào?
A. Cộng tác nhân đối xứng vào alkene đối xứng.
B. Cộng tác nhân không đối xứng vào alkene không đối xứng.
C. Thế halogen vào alkane.
D. Trùng hợp alkene.

Câu 43. (Thông hiểu) Để phân biệt ethane và ethylene, ta dùng thuốc thử nào?
A. Dung dịch NaOH.
B. Nước Bromine.
C. Dung dịch NaCl.
D. Quỳ tím.

Câu 44. (Thông hiểu) Để phân biệt acetylene và ethylene, ta dùng thuốc thử nào?
A. Dung dịch Br2.
B. Dung dịch KMnO4.
C. Dung dịch AgNO3/NH3.
D. Khí H2.

Câu 45. (Thông hiểu) Cho 2-methylbut-2-ene tác dụng với HCl, sản phẩm chính là
A. 2-chloro-2-methylbutane.
B. 2-chloro-3-methylbutane.
C. 1-chloro-2-methylbutane.
D. 1-chloro-3-methylbutane.

Câu 46. (Thông hiểu) Tại sao benzene không làm mất màu nước bromine nhưng toluene lại làm mất màu thuốc tím khi đun nóng?
A. Do toluene có tính acid.
B. Do benzene có vòng thơm bền vững, toluene có nhóm alkyl dễ bị oxi hóa.
C. Do benzene là chất khí.
D. Do toluene có liên kết đôi tự do.

Câu 47. (Thông hiểu) Trong thí nghiệm thế bromine vào hexane, vai trò của ánh sáng là
A. Làm nóng dung dịch.
B. Xúc tác tạo gốc tự do.
C. Ngăn cản phản ứng phụ.
D. Làm bay hơi hexane.

Câu 48. (Thông hiểu) Khi sục khí acetylene vào dung dịch AgNO3 trong NH3, kết tủa tạo thành có màu
A. Trắng.
B. Đen.
C. Vàng nhạt.
D. Đỏ gạch.

Câu 49.(Thông hiểu)  Phản ứng nào sau đây chứng minh benzene có tính chất của hydrocarbon no (dễ thế)?
A. Cộng H2.
B. Cộng Cl2 (as).
C. Thế Br2 (Fe, t°).
D. Oxi hóa bởi O2.

Câu 50. (Thông hiểu) Hexane không tan trong nước nhưng tan trong xăng vì
A. Hexane là chất phân cực.
B. Hexane và xăng đều là dung môi không phân cực.
C. Hexane có khối lượng riêng lớn hơn nước.
D. Hexane phản ứng được với xăng.

Câu 51. (Thông hiểu) Đốt cháy hoàn toàn hỗn hợp gồm alkane và alkene. Khí CO2 sinh ra được hấp thụ vào nước vôi trong dư sẽ tạo
A. Kết tủa trắng.
B. Dung dịch màu xanh.
C. Kết tủa vàng.
D. Khí không màu.

Câu 52. (Thông hiểu) Sản phẩm của phản ứng cộng nước vào ethylene (xúc tác acid) là
A. Ethanol.
B. Ethane.
C. Acetic acid.
D. CO2 và H2O.

Câu 53. (Thông hiểu) Trong công nghiệp, để điều chế nhựa PE người ta thực hiện phản ứng
A. Trùng ngưng methane.
B. Trùng hợp ethylene.
C. Trùng hợp acetylene.
D. Trùng hợp styrene.

Câu 54. (Thông hiểu) Khi dẫn khí ethylene vào dung dịch KMnO4, hiện tượng quan sát được là
A. Dung dịch chuyển sang màu xanh.
B. Dung dịch mất màu tím, có kết tủa nâu đen.
C. Có kết tủa vàng.
D. Không có hiện tượng gì.

Câu 55.(Thông hiểu)  Phản ứng: C6H6 + HNO3 (H2SO4 đặc) → C6H5NO2 + H2O thuộc loại phản ứng
A. Thế nguyên tử H của vòng benzene.
B. Cộng vào vòng benzene.
C. Oxi hóa mạch nhánh.
D. Phản ứng tách.

Câu 56. (Thông hiểu) Tên thay thế của CH3-CH(CH3)-CH3 là
A. 2-methylpropane.
B. Isobutane.
C. Butane.
D. 2-methylbutane.

Câu 57. (Thông hiểu) Số đồng phân alkene của C4H8 (tính cả đồng phân hình học) là
A. 2.
B. 3.
C. 4.
D. 5.

Câu 58. (Thông hiểu) Cấu dạng của ethane bền nhất là cấu dạng
A. Che khuất.
B. Xen kẽ.
C. Vòng.
D. Phẳng.

Câu 59. (Thông hiểu) Vì sao không dùng nước để dập tắt đám cháy đất đèn (CaC2)?
A. Vì nước làm đám cháy to hơn do sinh ra acetylene dễ cháy.
B. Vì nước không hòa tan được CaC2.
C. Vì CaC2 phản ứng với nước thu nhiệt làm lạnh đám cháy.
D. Vì sinh ra khí CO2 độc hại.

Câu 60. (Thông hiểu)  Phản ứng nitro hóa toluene xảy ra dễ hơn benzene và ưu tiên vào vị trí
A. Meta.
B. Ortho và Para.
C. Chỉ vị trí Para.
D. Bất kỳ vị trí nào.

Câu 61. (Thông hiểu) Chất nào sau đây có thể dùng làm dung môi chiết xuất tinh dầu?
A. Nước.
B. Dung dịch NaCl.
C. Hexane.
D. Dung dịch HCl.

Câu 62. (Thông hiểu) Xăng E5 chứa 5% thể tích là chất gì?
A. Ethanol.
B. Ethylene.
C. Ethane.
D. Ether.

Câu 63. (Thông hiểu) Khi đốt cháy 1 mol alkane X thu được 3 mol CO2. X là
A. Methane.
B. Ethane.
C. Propane.
D. Butane.

Câu 64. (Thông hiểu) Dẫn xuất halogen nào được tạo ra khi cho Toluene tác dụng với Cl2 (ánh sáng, đun nóng)?
A. o-chlorotoluene.
B. p-chlorotoluene.
C. Benzyl chloride (C6H5CH2Cl).
D. m-chlorotoluene.

Câu 65. (Thông hiểu) Nhựa PVC được tổng hợp từ monomer nào?
A. CH2=CH2.
B. CH2=CH-Cl.
C. CH≡CH.
D. C6H5-CH=CH2.

Câu 66. (Thông hiểu) Nguyên nhân gây ngộ độc khí than (bếp than tổ ong) chủ yếu do khí nào sinh ra khi đốt cháy không hoàn toàn?
A. CO2.
B. CO.
C. SO2.
D. NOx.

Câu 67. (Thông hiểu) Để loại bỏ tạp chất SO2 trong khí ethylene, ta dẫn hỗn hợp qua
A. Dung dịch Br2.
B. Dung dịch NaOH dư.
C. Dung dịch H2SO4 đặc.
D. Dung dịch KMnO4.

Câu 68. (Thông hiểu) Phản ứng cộng Cl2 vào Benzene (ánh sáng) tạo thành C6H6Cl6. Tên gọi của sản phẩm là
A. Hexachlorobenzene.
B. Hexachlorocyclohexane.
C. Chlorobenzene.
D. Benzyl chloride.

Câu 69. (Thông hiểu) Hydrocarbon X có công thức C5H12, khi tác dụng với Cl2 (tỉ lệ 1:1) chỉ thu được 1 dẫn xuất monochloro duy nhất. X là
A. Pentane.
B. Isopentane.
C. Neopentane (2,2-dimethylpropane).
D. 2-methylbutane.

Câu 70. (Thông hiểu) Trong phòng thí nghiệm, methane được điều chế bằng cách
A. Đun nóng Sodium acetate vôi tôi xút.
B. Cho nhôm carbide tác dụng với nước.
C. Crackinh butane.
D. Cả A và B.

Câu 71. (Vận dụng) Đốt cháy hoàn toàn hydrocarbon X thu được nCO2 < nH2O. X thuộc dãy đồng đẳng
A. Alkane.
B. Alkene.
C. Alkyne.
D. Arene.

Câu 72.(Vận dụng)  Đốt cháy hoàn toàn 0,1 mol một hydrocarbon no X cần 0,5 mol O2. Công thức của X là
A. CH4.
B. C2H6.
C. C3H8.
D. C4H10.

Câu 73. (Vận dụng) Dẫn 2,24 lít (đkc) hỗn hợp khí gồm ethylene và ethane qua bình đựng dung dịch Br2 dư, thấy khối lượng bình tăng 1,4 gam. Số mol ethane trong hỗn hợp là
A. 0,05 mol.
B. 0,1 mol.
C. 0,02 mol.
D. 0,08 mol.

Câu 74. (Vận dụng) Một alkane X có phần trăm khối lượng carbon là 83,33%. Công thức phân tử của X là
A. CH4.
B. C2H6.
C. C3H8.
D. C5H12.

Câu 75. (Vận dụng) Cho 3,36 lít khí alkene X (đkc) tác dụng vừa đủ với dung dịch chứa 24 gam Br2. Công thức phân tử của X là
A. C2H4.
B. C3H6.
C. C4H8.
D. C5H10.

Câu 76. (Vận dụng) Hydrocarbon thơm X có công thức phân tử C8H10. Số đồng phân chứa vòng benzene của X là
A. 2.
B. 3.
C. 4.
D. 5.

Câu 77. (Vận dụng) Khi crackinh hoàn toàn một thể tích alkane X thu được ba thể tích hỗn hợp Y (các thể tích khí đo ở cùng điều kiện). Công thức phân tử của X là
A. C3H8.
B. C4H10.
C. C5H12.
D. C6H14.

Câu 78. (Vận dụng) Đốt cháy hoàn toàn m gam hỗn hợp X gồm CH4, C3H6 và C4H10 thu được 4,4 gam CO2 và 2,52 gam H2O. Giá trị của m là
A. 1,48 gam.
B. 2,48 gam.
C. 14,8 gam.
D. 24,7 gam.

Câu 79. (Vận dụng) Cho 0,1 mol alkyne X tác dụng tối đa với 0,2 mol Br2 trong dung dịch. Công thức tổng quát của X là
A. CnH2n-2.
B. CnH2n.
C. CnH2n+2.
D. CnH2n-6.

Câu 80. (Vận dụng) Oxi hóa hoàn toàn toluene bằng KMnO4 đun nóng, sau đó acid hóa thu được sản phẩm hữu cơ là
A. C6H5CHO.
B. C6H5COOH.
C. C6H5CH2OH.
D. C6H5OH.

Câu 81. (Vận dụng) Từ 15,6 gam benzene điều chế được bao nhiêu gam nitrobenzene (hiệu suất 80%)?
A. 24,6 gam.
B. 19,68 gam.
C. 15,36 gam.
D. 30,75 gam.

Câu 82. (Vận dụng) Đốt cháy hoàn toàn hydrocarbon A, thu được CO2 và H2O với tỉ lệ mol 2:1. A là
A. Alkane.
B. Alkene.
C. Alkyne.
D. Arene.

Câu 83. (Vận dụng) Một loại xăng chứa 4 alkane. Đốt cháy hoàn toàn 2,42 kg xăng này thải ra bao nhiêu CO2 (xấp xỉ)?
A. 7,0 kg.
B. 7,5 kg.
C. 8,0 kg.
D. 8,5 kg.

Câu 84. (Vận dụng) Tỉ khối hơi của hydrocarbon X so với H2 là 21. Công thức phân tử của X là
A. C3H6.
B. C3H8.
C. C3H4.
D. C2H4O.

Câu 85. (Vận dụng) Số đồng phân cấu tạo của C5H10 (alkene) là
A. 3.
B. 4.
C. 5.
D. 6.

Câu 86.(Vận dụng)  Cho sơ đồ: CaC2 -> X -> Y -> PE. Chất X, Y lần lượt là
A. C2H2, C2H4.
B. CH4, C2H4.
C. C2H4, C2H2.
D. C2H2, C4H4.

Câu 87.(Vận dụng)  Để làm sạch khí methane có lẫn tạp chất ethylene và acetylene, ta dẫn hỗn hợp qua
A. Dung dịch nước vôi trong.
B. Dung dịch Br2 dư.
C. Dung dịch AgNO3/NH3.
D. Dung dịch HCl.

Câu 88.(Vận dụng)  Alkane X có công thức phân tử C6H14. Khi clo hóa X tạo ra 2 dẫn xuất monochloro. Tên của X là
A. Hexane.
B. 2-methylpentane.
C. 3-methylpentane.
D. 2,3-dimethylbutane.

Câu 89.(Vận dụng)  Trùng hợp 2,8 tấn ethylene thu được m tấn PE với hiệu suất 90%. Giá trị của m là
A. 2,52.
B. 3,11.
C. 2,80.
D. 1,40.

Câu 90. (Vận dụng) Một bình kín chứa hỗn hợp gồm alkene X và H2 (xúc tác Ni). Đun nóng bình một thời gian thu được khí Y duy nhất. Tỉ khối của Y so với H2 gấp đôi tỉ khối của X so với H2. Công thức của X là
A. C2H4.
B. C3H6.
C. C4H8.
D. C5H10.

Câu 91.(Vận dụng cao)  Đốt cháy hoàn toàn V lít một alkyne thu được 10,8 gam H2O. Hấp thụ sản phẩm cháy vào nước vôi trong dư thấy khối lượng bình tăng 50,4 gam. Công thức phân tử của alkyne là
A. C2H2.
B. C3H4.
C. C4H6.
D. C5H8.

Câu 92. (Vận dụng cao)  Hỗn hợp X gồm C2H2 và H2 có cùng số mol. Lấy một lượng hỗn hợp X cho qua chất xúc tác nung nóng, thu được hỗn hợp Y gồm C2H4, C2H6, C2H2 và H2. Sục Y vào dung dịch brom dư thì khối lượng bình brom tăng 10,8 gam và thoát ra 4,48 lít hỗn hợp khí (đktc) có tỉ khối so với H2 là 8. Thể tích O2 (đktc) cần để đốt cháy hoàn toàn hỗn hợp Y là
A. 26,88 lít.
B. 44,80 lít.
C. 33,60 lít.
D. 22,40 lít.

Câu 93. (Vận dụng cao)  Từ 1 tấn toluene điều chế thuốc nổ TNT (2,4,6-trinitrotoluene), hiệu suất 62%. Khối lượng TNT thu được là
A. 1,53 tấn.
B. 2,46 tấn.
C. 1,28 tấn.
D. 2,05 tấn.

Câu 94. (Vận dụng cao)  Hỗn hợp khí X gồm 0,1 mol C2H2; 0,2 mol C2H4 và 0,3 mol H2. Đun nóng X với xúc tác Ni, sau một thời gian thu được hỗn hợp Y có tỉ khối so với H2 bằng 11. Hỗn hợp Y phản ứng tối đa với a mol Br2 trong dung dịch. Giá trị của a là
A. 0,1.
B. 0,2.
C. 0,3.
D. 0,4.

Câu 95. (Vận dụng cao)  Crackinh C4H10 thu được hỗn hợp gồm 5 hydrocarbon có tỉ khối hơi so với H2 là 16,325. Hiệu suất của phản ứng crackinh là
A. 66,67%.
B. 77,75%.
C. 80,00%.
D. 40,00%.

Câu 96. (Vận dụng cao)  Một hydrocarbon X mạch hở, thể khí. Lấy cùng số mol của X tác dụng hết với H2 (Ni, t°) và tác dụng hết với Br2 (dd) thì khối lượng H2 phản ứng bằng khối lượng Br2 phản ứng. Tổng số nguyên tử trong X là
A. 4.
B. 6.
C. 8.
D. 10.

Câu 97. (Vận dụng cao)  Đốt cháy hoàn toàn 0,1 mol hỗn hợp X gồm một alkane và một alkene, thu được 0,3 mol CO2 và 0,35 mol H2O. Công thức phân tử của alkane và alkene lần lượt là
A. CH4 và C2H4.
B. C2H6 và C2H4.
C. CH4 và C3H6.
D. C2H6 và C3H6.

Câu 98. (Vận dụng cao)  Cho m gam hỗn hợp X gồm ba hydrocarbon thuộc ba dãy đồng đẳng khác nhau (alkane, alkene, alkyne) đốt cháy hoàn toàn thu được 2,24 lít CO2 (đkc) và 2,7 gam H2O. Nếu dẫn m gam X qua dung dịch Br2 dư thì thấy khối lượng bình tăng 0,42 gam. Phần trăm số mol alkane trong X là
A. 40%.
B. 50%.
C. 60%.
D. 70%.

Câu 99. (Vận dụng cao)  Hydrocarbon X có công thức phân tử C8H8. X làm mất màu dung dịch Br2 và khi tác dụng với dung dịch AgNO3/NH3 không tạo kết tủa. Khi X tác dụng với H2 dư (Ni, t°) thu được ethylcyclohexane. Công thức cấu tạo của X là
A. C6H5-CH=CH2.
B. C6H5-C≡CH.
C. o-CH3-C6H4-CH3.
D. C6H5-CH2-CH3.

Câu 100. (Vận dụng cao)  Một bình kín dung tích 11,2 lít chứa hỗn hợp khí X gồm H2, C2H4 và C3H6 (đktc). Cho vào bình một ít bột Ni rồi nung nóng một thời gian, thu được hỗn hợp khí Y. Biết tỉ khối của X so với Y là 0,7. Áp suất trong bình sau khi nung nóng (giữ ở 0°C) là
A. 0,5 atm.
B. 0,7 atm.
C. 1,0 atm.
D. 1,4 atm.
`;

  const rawTF = `
Câu 1. Cho các phát biểu về tính chất vật lý của alkane:
a) Từ C1 đến C4 là chất khí.
b) Alkane tan tốt trong nước.
c) Nhẹ hơn nước.
d) Nhiệt độ sôi tăng theo khối lượng phân tử.

Câu 2. Cho các phát biểu về methane (CH4):
a) Là thành phần chính của khí thiên nhiên.
b) Có cấu trúc tứ diện đều.
c) Có phản ứng cộng với Br2.
d) Cháy tỏa nhiều nhiệt.

Câu 3. Cho các phát biểu về ethylene (C2H4):
a) Là chất khí không màu.
b) Có liên kết ba trong phân tử.
c) Làm mất màu nước bromine.
d) Dùng để kích thích quả chín.

Câu 4. Cho các phát biểu về acetylene (C2H2):
a) Phân tử có cấu trúc đường thẳng.
b) Phản ứng được với AgNO3/NH3.
c) Không tan trong nước.
d) Là hydrocarbon no.

Câu 5. Cho các phát biểu về benzene (C6H6):
a) Là chất lỏng ở điều kiện thường.
b) Tan vô hạn trong nước.
c) Có cấu trúc lục giác đều phẳng.
d) Có mùi đặc trưng.

Câu 6. Cho các phát biểu về công thức chung:
a) Alkane là CnH2n+2.
b) Alkene là CnH2n.
c) Alkyne là CnH2n-2.
d) Arene là CnH2n-6.

Câu 7. Cho các phát biểu về trạng thái tự nhiên:
a) Dầu mỏ chứa nhiều hydrocarbon.
b) Khí bioga chủ yếu là CO2.
c) Alkane rắn gọi là sáp paraffin.
d) Toluene có trong nhựa than đá.

Câu 8. Về phản ứng đặc trưng:
a) Alkane đặc trưng bởi phản ứng thế.
b) Alkene đặc trưng bởi phản ứng cộng.
c) Benzene dễ tham gia phản ứng cộng hơn phản ứng thế.
d) Alkyne có phản ứng thế ion kim loại.

Câu 9. Về đồng phân:
a) C3H8 có 2 đồng phân mạch carbon.
b) C4H10 có 2 đồng phân mạch carbon.
c) C5H12 có 3 đồng phân mạch carbon.
d) C2H6 không có đồng phân.

Câu 10. Về tên gọi:
a) CH4 là metan.
b) C2H4 là etan.
c) C2H2 là axetilen.
d) C6H6 là benzen.

Câu 11. Về tính chất hóa học của alkane:
a) Trơ về mặt hóa học ở nhiệt độ thường.
b) Phản ứng với dung dịch KMnO4.
c) Phản ứng thế halogen khi có ánh sáng.
d) Bị oxi hóa hoàn toàn khi đốt cháy.

Câu 12. Về liên kết hóa học:
a) Liên kết đơn gọi là liên kết sigma (σ).
b) Liên kết đôi gồm 1 σ và 1 π.
c) Liên kết ba gồm 1 σ và 2 π.
d) Liên kết π bền hơn liên kết σ.

Câu 13. Về ứng dụng:
a) Alkane dùng làm nhiên liệu.
b) Acetylene dùng hàn cắt kim loại.
c) Polyethylene (PE) dùng làm chất dẻo.
d) Benzene dùng làm thuốc bổ.

Câu 14. Về phản ứng trùng hợp:
a) Chỉ xảy ra với hydrocarbon no.
b) Ethylene trùng hợp tạo PE.
c) Propylene trùng hợp tạo PP.
d) Sản phẩm có khối lượng phân tử rất lớn.

Câu 15. Về toluene:
a) Là đồng đẳng của benzene.
b) Có công thức C7H8.
c) Phản ứng với thuốc tím ở điều kiện thường.
d) Có nhóm methyl gắn vào vòng benzene.

Câu 16. Về styrene:
a) Có công thức C8H8.
b) Có vòng benzene và 1 liên kết đôi ở nhánh.
c) Không làm mất màu nước bromine.
d) Có thể trùng hợp tạo PS.

Câu 17. Về naphthalene:
a) Là chất khí.
b) Có mùi long não.
c) Thăng hoa ở nhiệt độ thường.
d) Có 2 vòng benzene giáp nhau.

Câu 18. Về điều chế:
a) Điều chế acetylene từ đất đèn (CaC2).
b) Điều chế methane từ natri axetat.
c) Điều chế ethylene từ rượu etylic.
d) Điều chế benzene từ nước.

Câu 19. Về phản ứng cháy:
a) Alkane cháy tạo nH2O > nCO2.
b) Alkene cháy tạo nH2O = nCO2.
c) Alkyne cháy tạo nH2O > nCO2.
d) Arene cháy thường có nhiều muội than.

Câu 20. Về môi trường:
a) Khí thải động cơ chứa CO2 gây hiệu ứng nhà kính.
b) Benzene là chất gây ung thư.
c) Tràn dầu không gây hại cho sinh vật biển.
d) Đốt rơm rạ tạo bụi mịn PM2.5.


Câu 21.(Thông hiểu)  Xét phản ứng thế của propane với Cl2 (tỉ lệ 1:1):
a) Thu được hỗn hợp 2 sản phẩm thế.
b) 1-chloropropane là sản phẩm chính.
c) 2-chloropropane là sản phẩm chính.
d) Cơ chế phản ứng là thế gốc tự do.

Câu 22. (Thông hiểu) Xét phản ứng cộng HBr vào propene:
a) Tuân theo quy tắc Markovnikov.
b) H ưu tiên cộng vào C bậc cao hơn.
c) Sản phẩm chính là 2-bromopropane.
d) Sản phẩm phụ là 1-bromopropane.

Câu 23. (Thông hiểu) Phân biệt các khí mất nhãn C2H6, C2H4, C2H2:
a) Dùng dung dịch AgNO3/NH3 nhận biết C2H2.
b) Dùng nước bromine nhận biết C2H4 (sau khi đã loại C2H2).
c) C2H6 không phản ứng với cả 2 thuốc thử trên.
d) Có thể dùng tàn đóm để phân biệt 3 khí này.

Câu 24. (Thông hiểu) Về cấu trúc phân tử benzene:
a) 6 nguyên tử C tạo thành lục giác đều.
b) Tất cả các nguyên tử H và C nằm trên 1 mặt phẳng.
c) Có 3 liên kết đôi xen kẽ 3 liên kết đơn cố định.
d) Hệ liên hợp π bền vững.

Câu 25. (Thông hiểu) Phản ứng của toluene với các tác nhân:
a) Với Br2 (bột Fe, t°) thế vào vòng benzene.
b) Với Cl2 (ánh sáng, t°) thế vào nhóm methyl.
c) Với KMnO4 (t°) oxi hóa nhóm methyl thành nhóm -COOH.
d) Toluene khó thế hơn benzene.

Câu 26. (Thông hiểu) Về đồng phân hình học của alkene:
a) But-2-ene có đồng phân hình học.
b) But-1-ene có đồng phân hình học.
c) Đồng phân cis có mạch chính ở cùng phía liên kết đôi.
d) Điều kiện là mỗi C nối đôi phải liên kết với 2 nhóm thế khác nhau.

Câu 27. (Thông hiểu) So sánh tính chất vật lý:
a) Nhiệt độ sôi: Pentane > Neopentane.
b) Khả năng tan trong nước: Ethanol > Ethane.
c) Khối lượng riêng: Xăng > Nước.
d) Nhiệt độ nóng chảy: C18H38 > C2H6.

Câu 28.(Thông hiểu)  Về phản ứng cracking butane:
a) Tạo ra hỗn hợp alkane và alkene mới.
b) Có thể tạo ra methane và propene.
c) Có thể tạo ra ethane và ethylene.
d) Tổng số mol sản phẩm bằng số mol butane ban đầu.

Câu 29.(Thông hiểu)  Về thí nghiệm điều chế ethylene từ ethanol:
a) Cần xúc tác H2SO4 đặc và nhiệt độ 170°C.
b) Dẫn khí qua NaOH để loại bỏ tạp chất CO2, SO2.
c) Ethylene sinh ra làm mất màu thuốc tím.
d) Nên thu khí ethylene bằng phương pháp dời chỗ nước.

Câu 30. (Thông hiểu) Về phản ứng thế của alk-1-yne với ion kim loại:
a) Chỉ xảy ra với alkyne có liên kết ba đầu mạch.
b) Acetylene tạo kết tủa vàng nhạt Ag2C2.
c) But-2-yne cũng có phản ứng này.
d) Kết tủa tan được trong axit mạnh (HCl, HNO3).

Câu 31.(Vận dụng)  Cho chuỗi chuyển hóa: CH4 -> C2H2 -> C2H4 -> PE.
a) Phản ứng 1 cần làm lạnh nhanh ở 1500°C.
b) Phản ứng 2 dùng xúc tác Lindlar.
c) Phản ứng 3 là phản ứng trùng hợp.
d) Hiệu suất toàn bộ quá trình bằng tích hiệu suất từng giai đoạn.

Câu 32. (Vận dụng) Đốt cháy 1 mol hydrocarbon X thu được 4 mol CO2 và 5 mol H2O.
a) X là alkane.
b) X có công thức C4H10.
c) X có 2 đồng phân cấu tạo.
d) X làm mất màu nước bromine.

Câu 33. (Vận dụng) Khi cho isopentane tác dụng với Cl2 (tỉ lệ 1:1, as):
a) Có thể tạo ra tối đa 4 dẫn xuất monochloro.
b) Sản phẩm chính là 2-chloro-2-methylbutane.
c) Sản phẩm thế vào C bậc I chiếm tỉ lệ cao nhất.
d) Isopentane có tên thay thế là 2-methylbutane.

Câu 34. (Vận dụng) Hỗn hợp X gồm C3H8 và C3H6. Dẫn X qua bình brom dư:
a) Khối lượng bình tăng lên là khối lượng của C3H6.
b) Khí thoát ra là C3H8.
c) Nếu đốt cháy khí thoát ra, thu được nCO2 = nH2O.
d) Dung dịch brom bị nhạt màu.

Câu 35. (Vận dụng) Một hydrocarbon X (C8H10) không làm mất màu nước brom, khi đun với KMnO4 tạo C7H6O2 (Benzoic acid).
a) X là Ethylbenzene.
b) X là o-xylene.
c) X là styrene.
d) X có vòng benzene.


Câu 36. (Vận dụng cao)  Đốt cháy hoàn toàn m gam hỗn hợp gồm C2H4, C3H6, C4H8 cần V lít O2, thu được CO2 và H2O.
a) nCO2 luôn bằng nH2O.
b) Khối lượng CO2 lớn hơn khối lượng H2O.
c) Mối liên hệ m = 14 * nCO2 đúng.
d) Giá trị V không phụ thuộc vào tỉ lệ các chất trong hỗn hợp (nếu m cố định).

Câu 37. (Vận dụng cao)  Hydrocarbon A có công thức C9H12. Khi A tác dụng với Cl2 (xúc tác Fe, t°) chỉ thu được 1 dẫn xuất monochloro duy nhất.
a) A là 1,3,5-trimethylbenzene.
b) A là propylbenzene.
c) A đối xứng cao.
d) Khi oxi hóa A bằng KMnO4 thu được axit 3 chức.

Câu 38. (Vận dụng cao)  Xét quá trình: Heptane --(reforming)--> Toluene + 4H2.
a) Phản ứng làm tăng chỉ số octane của xăng.
b) Toluene sinh ra ít độc hơn benzene.
c) Thể tích khí tăng gấp 5 lần (cùng điều kiện).
d) Đây là phản ứng dehydro hóa và đóng vòng.

Câu 39. (Vận dụng cao)  Cho 0,1 mol hỗn hợp X (gồm 1 alkene và 1 alkyne có cùng số C) tác dụng với H2 dư (Ni, t°) thu được 0,1 mol alkane Y. Đốt cháy Y thu được 8,8g CO2.
a) Alkane Y là C2H6.
b) Alkene là C2H4.
c) Alkyne là C2H2.
d) Số mol alkene bằng số mol alkyne.

Câu 40. (Vận dụng cao)  Trong công nghiệp, người ta điều chế Isoprene từ Isopentane để sản xuất cao su.
a) Quá trình này là phản ứng tách H2.
b) Isoprene là 2-methylbuta-1,3-diene.
c) Isopentane là 2-methylbutane.
d) Isoprene có khả năng trùng hợp.
`;

  const rawSA = `
Câu 1. Methane (CH4) có khối lượng phân tử bằng bao nhiêu?
Câu 2. Số nguyên tử Hydrogen trong phân tử Propane là bao nhiêu?
Câu 3. Số nguyên tử Carbon trong phân tử Butane là bao nhiêu?
Câu 4. Alkane C5H12 có bao nhiêu đồng phân cấu tạo?
Câu 5. Số nguyên tử Hydrogen trong phân tử Ethylene là bao nhiêu?
Câu 6. Số nguyên tử Carbon trong phân tử Acetylene là bao nhiêu?
Câu 7. Benzene (C6H6) có khối lượng phân tử bằng bao nhiêu?
Câu 8. Số liên kết pi (π) trong phân tử Alkane là bao nhiêu?
Câu 9. Số liên kết pi (π) trong phân tử Alkene là bao nhiêu?
Câu 10. Số liên kết pi (π) trong phân tử Alkyne là bao nhiêu?
Câu 11. Số nguyên tử Carbon trong phân tử Toluene là bao nhiêu?
Câu 12. Ethane (C2H6) có khối lượng phân tử bằng bao nhiêu?
Câu 13. Alkane C4H10 có bao nhiêu nguyên tử H?
Câu 14. Alkane C6H14 có bao nhiêu đồng phân cấu tạo?
Câu 15. Alkene C4H8 có bao nhiêu đồng phân cấu tạo (không tính hình học)?
Câu 16. Phân tử Propene có bao nhiêu liên kết đôi?
Câu 17. Phân tử But-1-yne có bao nhiêu liên kết ba?
Câu 18. Số nguyên tử H trong phân tử Styrene (C8H8) là bao nhiêu?
Câu 19. Góc liên kết trong phân tử Acetylene là bao nhiêu độ?
Câu 20. Khối lượng phân tử của khí CO2 là bao nhiêu?
Câu 21. Hệ số cân bằng của O2 trong phản ứng đốt cháy CH4 là bao nhiêu?
Câu 22. Số nguyên tử Carbon trong phân tử Hexane là bao nhiêu?
Câu 23. Số đồng phân của C4H6 (alkyne) là bao nhiêu?
Câu 24. Số nhóm thế methyl trong phân tử Neopentane là bao nhiêu?
Câu 25. Phân tử Benzene có bao nhiêu cạnh trong mô hình lục giác đều?
Câu 26. Số nguyên tử Hydrogen trong phân tử Naphthalene (C10H8)?
Câu 27. Khối lượng phân tử của CaC2 (Calcium carbide) là bao nhiêu?
Câu 28. Butane có bao nhiêu liên kết C-C trong mạch chính?
Câu 29. Số C trong phân tử Heptane?
Câu 30. Số H trong phân tử Octane?

Câu 31.(Thông hiểu)  Tổng hệ số (số nguyên tối giản) của phương trình đốt cháy C2H6?
Câu 32. (Thông hiểu) Số dẫn xuất monochloro tối đa sinh ra khi cho isopentane tác dụng với Cl2 (as)?
Câu 33. (Thông hiểu) Số đồng phân cấu tạo của C5H10 (alkene)?
Câu 34. (Thông hiểu) Số đồng phân alkyne của C5H8?
Câu 35. (Thông hiểu) Đốt cháy 1 mol C3H8 tạo ra bao nhiêu mol H2O?
Câu 36. (Thông hiểu) Đốt cháy 1 mol C2H2 tạo ra bao nhiêu mol CO2?
Câu 37. (Thông hiểu) Số nguyên tử C bậc III trong phân tử Isobutane?
Câu 38.(Thông hiểu)  Khối lượng kết tủa (gam) khi dẫn 0,1 mol Acetylene vào AgNO3/NH3 dư? (Ag=108)
Câu 39. (Thông hiểu) Số liên kết sigma (σ) trong phân tử C2H4?
Câu 40. (Thông hiểu) Số liên kết sigma (σ) trong phân tử C2H2?
Câu 41. (Thông hiểu) Toluene có bao nhiêu nguyên tử H?
Câu 42.(Thông hiểu)  Đốt cháy CnH2n+2, nếu nCO2 = 3 thì nH2O bằng bao nhiêu?
Câu 43.(Thông hiểu)  Từ 1 phân tử C6H14 khi cracking có thể tạo ra tối đa bao nhiêu phân tử khí (giả sử cắt mạch 1 lần)?
Câu 44. (Thông hiểu) Phản ứng thế Cl2 vào 2,2-dimethylpropane cho mấy sản phẩm thế monochloro?
Câu 45. (Thông hiểu) Phân tử khối của sản phẩm khi cho Ethylene cộng Br2?
Câu 46. (Vận dụng)  % khối lượng Carbon trong CH4 là bao nhiêu? (Làm tròn đến hàng đơn vị)
Câu 47. (Vận dụng) Đốt cháy hoàn toàn 2,24 lít (đkc) C2H6 thì thu được bao nhiêu gam H2O?
Câu 48. (Vận dụng) Crackinh 1 mol C4H10 thu được 1,8 mol hỗn hợp khí. Hiệu suất phản ứng là bao nhiêu phần trăm?
Câu 49. (Vận dụng) Số đồng phân arene của C8H10?
Câu 50. (Vận dụng) Đốt cháy m gam C2H4 thu được 8,8 gam CO2. Giá trị m là bao nhiêu?
Câu 51. (Vận dụng) Cho 0,1 mol C2H2 phản ứng tối đa với bao nhiêu mol Br2?
Câu 52. (Vận dụng) Số nguyên tử C trong alkane có tỉ khối hơi so với H2 bằng 36?
Câu 53. (Vận dụng) Khối lượng (gam) của 0,1 mol thuốc nổ TNT (C7H5N3O6)?
Câu 54. (Vận dụng) Đốt cháy một hydrocarbon thu được 2 mol CO2 và 3 mol H2O. Số C trong hydrocarbon đó?
Câu 55. (Vận dụng) Tổng số nguyên tử trong phân tử sản phẩm của phản ứng Toluen + HNO3 (tỉ lệ 1:1)?

Câu 56. (Vận dụng cao)   Dẫn 0,2 mol hỗn hợp gồm C2H2 và H2 qua Ni nung nóng thu được hỗn hợp Y chỉ gồm hydrocarbon có tỉ khối so với H2 là 14,5. Hiệu suất phản ứng hidro hóa là bao nhiêu phần trăm? (Nhập số nguyên)
Câu 57. (Vận dụng cao)  Một alkane X có phần trăm khối lượng H là 16,28%. Số đồng phân cấu tạo của X?
Câu 58. (Vận dụng cao)  Đốt cháy hoàn toàn hỗn hợp X gồm 2 alkane kế tiếp nhau trong dãy đồng đẳng thu được 2,24 lít CO2 (đkc) và 3,24 gam H2O. Số mol của alkane có khối lượng phân tử nhỏ hơn là bao nhiêu?
Câu 59. (Vận dụng cao)  Trùng hợp 1 tấn ethylene với hiệu suất 80% thu được bao nhiêu tấn PE? (Làm tròn 1 chữ số thập phân)
Câu 60. (Vận dụng cao)  Số mol O2 cần dùng để đốt cháy hoàn toàn 1 mol hỗn hợp gồm C3H6 và C4H8 là bao nhiêu? (Biết tỉ lệ mol 1:1)
`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "B,D,B,B,B,C,B,C,B,B,B,C,C,B,B,C,C,B,C,C,A,B,A,C,B,A,B,A,B,B,B,C,C,C,C,B,C,B,C,B,B,B,B,C,A,B,B,C,C,B,A,A,B,B,A,A,C,B,A,B,C,A,C,C,B,B,B,B,C,D,A,C,A,D,B,C,A,A,A,B,B,C,B,A,D,A,B,D,A,A,B,A,A,D,A,C,A,C,A,B".split(
      ",",
    );
  const ansTFList = [
    "ĐSĐĐ",
    "ĐĐSĐ",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐSĐS",
    "ĐĐĐĐ",
    "ĐSĐĐ",
    "ĐĐSĐ",
    "SĐĐS",
    "ĐSĐĐ",
    "ĐSĐĐ",
    "ĐSĐS",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐSĐ",
    "ĐĐSĐ",
    "SĐĐĐ",
    "ĐĐĐS",
    "SSSĐ",
    "ĐĐSS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐSĐS",
    "ĐSĐĐ",
    "SSSĐ",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐSSS",
    "ĐĐSĐ",
    "ĐSSS",
    "SSSĐ",
    "ĐSĐĐ",
    "ĐSĐĐ",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐĐĐ",
  ];
  const ansSAList =
    "16|8|4|3|4|2|78|0|1|2|7|30|10|5|3|1|1|8|180|44|2|6|2|4|6|8|64|3|7|18|19|4|5|3|4|2|1|24|5|3|8|4|2|1|188|75|5,4|80|4|2,8|0,2|5|22,7|2|21|100|2|0,05|0,8|5,25".split(
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
