
/**
 * ============================================================
 * TASK 05 — ATM BANKING SYSTEM
 * LEVEL: HARD
 * TIME: 20–25 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * Variables, Type Conversion, switch, if / else,
 * Comparison Operators, Logical Operators
 *
 * TAPŞIRIQ:
 * Balans yoxlamaq, pul əlavə etmək və pul çıxarmaq
 * əməliyyatlarını yerinə yetirən ATM sistemi hazırlayın.
 *
 * BAŞLANĞIC MƏLUMATLARI:
 * balance = 500
 * pinCode = "1234"
 *
 * ƏMƏLİYYATLAR:
 * 1 -> Check Balance
 * 2 -> Deposit Money
 * 3 -> Withdraw Money
 * 4 -> Exit
 *
 * TƏLƏBLƏR:
 * 1. PIN kodunu yoxlayın.
 * 2. PIN yanlış olduqda "Incorrect PIN!" qaytarın.
 * 3. PIN düzgündürsə, seçimi switch ilə emal edin.
 * 4. Seçim 1: Cari balansı qaytarın.
 * 5. Seçim 2: Məbləği balansa əlavə edin.
 * 6. Seçim 3: Məbləği balansdan çıxarın.
 * 7. Seçim 4: "Goodbye!" qaytarın.
 * 8. Yanlış seçim: "Invalid option!" qaytarın.
 * 9. Pul əlavə etmə və çıxarma zamanı məbləğ
 *    düzgün və 0-dan böyük olmalıdır.
 * 10. Pul çıxarma zamanı balansı yoxlayın.
 * 11. Balans çatmadıqda:
 *     "Insufficient balance!"
 * 12. Əməliyyatdan sonra qalan balansı qaytarın.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * PIN: "1234"
 * Option: 3
 * Amount: 200
 *
 * Withdrawal successful!
 * Remaining Balance: 300 AZN
 *
 * BONUS:
 * Yanlış və mənfi məbləğlər üçün ayrıca yoxlama yazın.
 *
 * QAYDALAR:
 * - prompt(), alert() və console.log() istifadə etməyin.
 * - switch və if / else istifadə edin.
 * - Yalnız bir əməliyyat yerinə yetirilməlidir.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function atm(enteredPin, option, amount) {
  const balance = 500;
  if (enteredPin !== '1234') {
    return { message: 'Incorrect PIN!', balance };
  }

  switch (option) {
    case '1':
      return { message: 'Balance: 500 AZN', balance };
    case '2':
    case '3': {
      if (
        amount === null ||
        (typeof amount !== 'number' && typeof amount !== 'string') ||
        (typeof amount === 'string' && amount.trim() === '')
      ) {
        return { message: 'Invalid amount!', balance };
      }

      const numericAmount = Number(amount);
      if (!Number.isFinite(numericAmount) || numericAmount <= 0) {
        return { message: 'Invalid amount!', balance };
      }

      if (option === '2') {
        return { message: 'Deposit successful!', balance: balance + numericAmount };
      }
      if (numericAmount > balance) {
        return { message: 'Insufficient balance!', balance };
      }
      return { message: 'Withdrawal successful!', balance: balance - numericAmount };
    }
    case '4':
      return { message: 'Goodbye!', balance };
    default:
      return { message: 'Invalid option!', balance };
  }
}

module.exports = { atm };
