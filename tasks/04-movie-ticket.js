
/**
 * ============================================================
 * TASK 04 — MOVIE TICKET ELIGIBILITY
 * LEVEL: MEDIUM
 * TIME: 15–20 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * Type Conversion, Comparison Operators,
 * Logical Operators, if / else
 *
 * TAPŞIRIQ:
 * İstifadəçinin yaşına və biletinin olub-olmamasına
 * əsasən kinoya giriş icazəsini müəyyən edən proqram yazın.
 *
 * QAYDALAR:
 * - Film 16+ yaş üçündür.
 * - İstifadəçinin yaşı ən azı 16 olmalıdır.
 * - İstifadəçinin bileti olmalıdır.
 *
 * TƏLƏBLƏR:
 * 1. name, age və hasTicket parametrlərini qəbul edin.
 * 2. age dəyərini Number() ilə ədədə çevirin.
 * 3. Yaşın düzgün daxil edildiyini yoxlayın.
 * 4. Yaş mənfi, boş və ya rəqəm deyilsə:
 *    "Invalid age!"
 * 5. Yaş 16-dan kiçikdirsə:
 *    "Age restriction!"
 * 6. Yaş uyğundur, lakin bilet yoxdursa:
 *    "Ticket required!"
 * 7. Hər iki şərt ödənirsə:
 *    "Welcome to the cinema!"
 * 8. Giriş icazəsini && operatoru ilə yoxlayın.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * Input: ("Leyla", 18, true)
 *
 * Name: Leyla
 * Age: 18
 * Has ticket: true
 * Result: Welcome to the cinema!
 *
 * BONUS:
 * ! operatoru ilə biletin olmadığını ayrıca yoxlayın.
 *
 * QAYDALAR:
 * - prompt(), alert() və confirm() istifadə etməyin.
 * - hasTicket parametrini boolean kimi qəbul edin.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function movieTicket(name, age, hasTicket) {
  if (
    age === null ||
    (typeof age !== 'number' && typeof age !== 'string') ||
    (typeof age === 'string' && age.trim() === '')
  ) {
    return { error: 'Invalid age!' };
  }

  const numericAge = Number(age);
  if (!Number.isFinite(numericAge) || numericAge < 0) {
    return { error: 'Invalid age!' };
  }

  let result;
  if (numericAge < 16) {
    result = 'Age restriction!';
  } else if (!hasTicket) {
    result = 'Ticket required!';
  } else if (numericAge >= 16 && hasTicket) {
    result = 'Welcome to the cinema!';
  }

  return { name, age: numericAge, hasTicket, result };
}

module.exports = { movieTicket };
