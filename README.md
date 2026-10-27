# JavaScript Fundamentals & Logic — Auto Grader

Bu layihədə **6 tapşırıq**, hər tapşırıq üçün **3 avtomatik test** var. Ümumi **18 test**.

## İşə salmaq

1. Kompüterdə Node.js quraşdırılmış olmalıdır.
2. Layihə qovluğunu VS Code-da açın.
3. `tasks/` qovluğundakı uyğun faylda funksiyanın içini doldurun.
4. Terminalda işlədin:

```bash
node run-tests.js
```

Yalnız bir tapşırığı yoxlamaq üçün:

```bash
node run-tests.js 1
node run-tests.js 5
```

Heç bir `npm install` tələb olunmur. Hər test **PASS**, **FAIL** və ya **ERROR** göstərir. Yekunda `keçən testlər / bütün testlər` və 100 üzərindən bal göstərilir. **Hər test eyni çəkidədir.** Testlər hər dəfə 3 fərqli input ilə işləyir; bunlar sabit test ssenariləridir, təsadüfi deyil.

## Vacib qayda

**Funksiyaların adını, parametr sırasını və `module.exports` sətrini dəyişməyin.** `prompt()`, `alert()` və `confirm()` istifadə etməyin: avtomatik yoxlama üçün input-lar parametr kimi gəlir. `console.log()` nəticə sayılmır; funksiyanın nəticəsini **`return`** edin. Bu tapşırıqlar əvvəlki brauzer tapşırıqlarının avtomatik test oluna bilən variantlarıdır.

## Task 1 — Personal Information System (Easy)

`tasks/01-personal-info.js` → `personalInfo(name, age, city)`

Ad, yaş və şəhər qəbul edin; yaşı ədədə çevirin və 5 il sonrakı yaşı hesablayın. Obyekt qaytarın:

```js
{ name: 'Ali', age: 20, city: 'Baku', ageAfter5: 25, nameType: 'string', ageType: 'number' }
```

## Task 2 — Shopping Receipt Calculator (Easy)

`tasks/02-shopping-receipt.js` → `shoppingReceipt(product, price, quantity)`

Qiyməti və sayı ədədə çevirin. Yekun məbləği hesablayın. `over20` dəyəri yekun məbləğ 20-dən **böyük** olduqda `true` olmalıdır.

```js
{ product: 'Notebook', unitPrice: 4, quantity: 3, total: 12, over20: false }
```

## Task 3 — Student Grade Calculator (Medium)

`tasks/03-student-grade.js` → `studentGrade(name, exam1, exam2, exam3)`

Balları ədədə çevirin, ortanı hesablayın. `90+` Excellent, `70+` Good, `50+` Passed, əks halda Failed. Hər bal 0–100 aralığında sonlu ədəd olmalıdır. Yanlış bal üçün `{ error: 'Invalid score!' }` qaytarın.

```js
{ student: 'Ali', exam1: 85, exam2: 90, exam3: 95, average: 90, result: 'Excellent' }
```

## Task 4 — Movie Ticket Eligibility (Medium)

`tasks/04-movie-ticket.js` → `movieTicket(name, age, hasTicket)`

Yaşı ədədə çevirin. Yaş 0-dan kiçikdirsə, boşdursa və ya ədəd deyilsə `{ error: 'Invalid age!' }` qaytarın. 16-dan kiçikdirsə `Age restriction!`, 16+ olub bileti yoxdursa `Ticket required!`, əks halda `Welcome to the cinema!`.

```js
{ name: 'Leyla', age: 18, hasTicket: true, result: 'Welcome to the cinema!' }
```

## Task 5 — ATM Banking System (Hard)

`tasks/05-atm.js` → `atm(enteredPin, option, amount)`

Başlanğıc balans **500 AZN**, düzgün PIN **'1234'**. Hər funksiya çağırışı yeni əməliyyatdır və balans yenidən 500-dən başlayır. `option` string olaraq `'1'`, `'2'`, `'3'`, `'4'` gəlir.

- `'1'`: `{ message: 'Balance: 500 AZN', balance: 500 }`
- `'2'`: düzgün müsbət məbləği əlavə et; `Deposit successful!`
- `'3'`: düzgün müsbət məbləği kifayət qədər balans olduqda çıx; `Withdrawal successful!`
- `'4'`: `Goodbye!`
- Yanlış PIN: `Incorrect PIN!`
- Yanlış seçim: `Invalid option!`
- Məbləğ 0 və ya mənfidirsə, boşdursa, yaxud ədəd deyilsə: `Invalid amount!`
- Balans çatmırsa: `Insufficient balance!`

Hər halda `{ message: '...', balance: ... }` formatını qaytarın.

## Task 6 — Delivery Price Calculator (Hard)

`tasks/06-delivery.js` → `delivery(amount, zone, isVIP, promoCode)`

Sifariş məbləği müsbət sonlu ədəd olmalıdır. Zona `1` = 3 AZN, `2` = 6 AZN, `3` = 10 AZN. Məbləğ **endirimdən əvvəl 50 AZN və ya daha çoxdursa**, çatdırılma 0 AZN olur. VIP üçün ilkin sifariş məbləğinin 10%-i endirimdir. `promoCode === 'SAVE5'` olarsa VIP endirimindən **sonra** əlavə 5 AZN endirim edilir (sifarişin endirimdən sonrakı qiyməti 0-dan aşağı düşmür). Yanlış zona və ya məbləğ: `{ error: 'Invalid input!' }`.

```js
{ orderAmount: 40, zone: 2, vip: true, discount: 4, delivery: 6, total: 42 }
```

`discount` ümumi endirim məbləğidir. Hesablamaları ədədlə qaytarın; nümunələrdə onluq nəticə çıxa bilər.

## Müəllim üçün

`tests/` qovluğunda hər tapşırığın 3 sınaq ssenarisi JSON formatında saxlanılır. `run-tests.js` bu ssenariləri oxuyur. Testlər görünəndir; tələbələr test fayllarını dəyişsələr, yerli bal etibarlı sayılmır. **Yekun qiymətləndirmə üçün test fayllarının orijinal nüsxəsini müəllim saxlamalıdır.** Bu layihə təhlükəsiz sandbox deyil: tələbənin yazdığı JS kodu Node.js prosesində işləyir; yalnız etibarlı tələbə kodlarını yoxlayın.
