# Ответы на вопросы:

## 1.Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения

 пользователя;
 менеджера проекта;
 дизайнера;
 верстальщика;
 клиентского программиста;
 серверного программиста.

1. Удобство, интуитивно понятно, нет затруднений в процессе работы с веб приложением. В то время как в обратном случае
   пользователь выйдет с проекта, будет процент отказа огромный, ключевые цели не будут выполняться.
2. Честно не знаю, наверное статистическими данными ( конверсия и тд)
3. не реализована идея, есть изменения в макете
4. Это его задача сделать ее хорошей)
5. Как frontend разработчик скажу, например нужно с бэка достать два элемента, а сверстан лишь один тупо строкой)
   Разумеется плохо!!!
6. Думаю излнишним обращением к бэку.

## 2.Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки.Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.

### Чтобы такие проекты поддерживать,

1. нужно не писать тупо CSS нужно использовать припроцессоры sass/less,
   например есть цвета сайта основные, они переиспользуются много где,
   создаем переменную с данынм цветом в одном месте, а если нужно заменить цвет на новый,
   нужно поменять лишь в одном месте:) И т.д
2. Также методолгия БЭМ - без нее уже не представляю как поддерживать проекты
3. Системы контроля версий!

## Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. 

1. Медиа запросы под разные разрешения.
2. также постоянно смотреть поддержку того или иного свойства для браузеров
3. использовать специальные префиксы

## Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.
Я имею устройства на разных OC, поэтому с отдладкой мне проще. некие трудности порой возникают с SAFARI.
мой стек WebPack JS React JS Redux CSS SASS ( scss ) 


### Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

1. Расшрения для браузера 
2. Лучшая IDE webstorm:)
3. Sass
4. npm пакеты - если необходимы

## Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

1. начну дебажить стандартно с консолькой браузера
2. использовать префиксы для кроссбраузерной поддержки

## Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

1. утончить у дизайнера
2. уточнить у рук-ва 
3. Если дали добро сделать на свое усмотрение:)
4. Категорически запрещено сидеть ровно и ждать пока сами скинут:)

## Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

1. Форумы, тематические чаты телеграм
2. ГУГЛ!
3. Курсы яндекс практикум ( правда не очень и понравилось, не актуальная информация )
4. Мне нравится верстка и JS програмирование - в основном на REACT JS + REDUX

## Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
Меня зовут Сергей мне 24 года, я давно в веб разработке, был на должности ПМ, после ушел в разработку собственными силами:) На Гитхаб есть пет проектики, спасибо за внимание!


https://github.com/skan7575/testovoe - задание выполнил на REACT JS. Redux не использовал, хотя мог:) Использовал scss
(правда на скорую руку )

Инструкция по запуску проекта на React
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify