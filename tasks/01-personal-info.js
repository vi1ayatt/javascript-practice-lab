
/**
 * ============================================================
 * TASK 01 — PERSONAL INFORMATION SYSTEM
 * LEVEL: EASY
 * TIME: 10–15 minutes
 * ============================================================
 *
 * MÖVZULAR:
 * Variables, Data Types, Number(), typeof, Arithmetic Operators
 *
 * TAPŞIRIQ:
 * İstifadəçinin şəxsi məlumatlarını emal edən proqram yazın.
 * Funksiya ad, yaş və şəhər məlumatlarını parametr kimi qəbul
 * etməli və hesablanmış nəticələri obyekt şəklində qaytarmalıdır.
 *
 * TƏLƏBLƏR:
 * 1. name, age və city parametrlərini qəbul edin.
 * 2. age dəyərini Number() vasitəsilə ədədə çevirin.
 * 3. İstifadəçinin 5 il sonrakı yaşını hesablayın.
 * 4. name və age dəyişənlərinin data type-larını typeof ilə tapın.
 * 5. Bütün nəticələri return vasitəsilə obyekt kimi qaytarın.
 *
 * GÖZLƏNİLƏN NƏTİCƏ:
 * Input: ("Ali", "20", "Baku")
 *
 * {
 *   name: "Ali",
 *   age: 20,
 *   city: "Baku",
 *   ageAfter5: 25,
 *   nameType: "string",
 *   ageType: "number"
 * }
 *
 * BONUS:
 * Ad boş daxil edildikdə xəbərdarlıq nəticəsi qaytarın.
 *
 * QAYDALAR:
 * - prompt(), alert() və console.log() istifadə etməyin.
 * - Məlumatları funksiya parametrlərindən alın.
 * - Nəticəni return ilə qaytarın.
 * - Funksiyanın adını və module.exports hissəsini dəyişməyin.
 * ============================================================
 */

function personalInfo(name, age, city) {
  const numericAge = Number(age);

  return {
    name,
    age: numericAge,
    city,
    ageAfter5: numericAge + 5,
    nameType: typeof name,
    ageType: typeof numericAge
  };
}

module.exports = { personalInfo };
