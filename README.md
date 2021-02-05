# Тестовое задание

### [>>> Демо на Github Pages <<<](http://bogachenkov.github.io/test-task "Demo on Github Pages")

### Задача

Необходимо сверстать форму заказа анализов.

Должно быть два шага: поиск и выбор анализов, форма для заполнения личных данных.

**1. Поиск и выбор анализов.**

  - Выбранная категория показывает свой набор анализов. По-умолчанию выбраны популярные.
  - Поиск должен игнорировать выбранную категорию и выводить все анализы с совпадением названия.
  - Выбор категории должен сбрасывать поиск.
  - Показывать всегда не больше 9ти анализов.
  - Пользователь может выбрать несколько анализов из разных категорий.
  - Кнопка "Следующий шаг" доступна только если есть выбранные анализы.


**2. Форма для заполнения личных данных.**

  - Время сдачи - обязательное поле, показываем стандартный контрол выбора даты и времени.
  - Адрес - обязательное поле, текст.
  - Номер телефона - обязательное поле, желательно добавить маску.
  - Кнопка "Следующий шаг" доступна только если все обязательные поля заполнены.

При нажатии на "Следующий шаг" в консоль должен выводиться объект с всей информацией (анализы + данные с формы).

**Технические требования:**
- Реакт
- Функциональные компоненты с хуками
- JSS для стилей
- Стэйт любой (использовал Recoil).
