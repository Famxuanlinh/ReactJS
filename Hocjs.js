/* 
+  -> Cộng
-  -> Trừ
*  -> Nhân
/  -> Chia
** -> Lũy thừa
%  -> Chia lấy dư
++ -> Tăng 1 giá trị số i = i + 1
-- -> Giảm 1 giá trị số i = i - 1
Prefix (++a) & Postfix(a++) = Tiền tố & Hậu tố
*/


/**
 Toán tử 
 =  (x = y)
 += (x = x + y)
 -+ (x = x -y)
 *= (x = x * y)
 /= (x = x / y)
 **=(x = x ** y)
 */

 /**
  Toán tử so sánh
  ==  -> bằng  //===  -> so sánh tuyệt đối ( Tính cả value và string)
  !=  -> Không bằng  // !==  -> so sánh tuyệt đối
  >   -> lớn
  <   -> bé
  >=  -> Lớn hơn hoặc bằng
  <=  -> Bé hơn hoặc bằng

  */

  /**
   Boolean - True or False
   Toán tử logic
   && - And
   || - Or
   !  - Not
   */
//  var a = 3;
//  a **= 2;
//  console.log (a)



// // Toán tử chuỗi - String operator
// var name = 'Linh';
// name += ' Fam';
// console.log (name);
// console.log ('Hello world')


/**
 Kiểu dữ liệu trong JS

 1. Dữ liệu nguyên thuỷ - Primitive Data
      - Number (var a = 1;)
      - String (var fullName = 'Fam Linh';)
      - Boolean (isSuccess = true && false;)
         *Có 6 kiểu mà dữ liệu nhận về là false ( 0, '', null, underfined, NaN, false)
      - Underfined 
      - Null (var isNull = null;) Không có gì
      - Symbol (id = Symbol('id')) //unique

2. Dữ liệu phức tạp - Complex Data
      - Function
      - Object
*/

// Ví dụ toán điều kiện false ( 0, '', null, underfined, NaN, false)
// && - and sử dụng lấy result false //// Lấy result cuối
// || - or sử dụng lấy result true (ngược lại and) // Lấy result đầu tiên
var a = 1;
var b = 2;
var result = 'A' && 'B' && 'C' && 'D';
if (result) {
   console.log (result);
      console.log ('Right');} // result D (false) (Bỏ hết all đáp án ko giống phía trên. Lấy đáp án cuối cùng)
      else {
         console.log (result); 
         console.log ('false'); //Nếu đáp án là ( 0, '', null, underfined, NaN, false)
         }
