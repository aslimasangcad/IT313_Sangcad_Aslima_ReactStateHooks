Project Description

The Lab Timer & Practice Tracker is a simple mobile app made using React Native and Expo. Ginagamit ito para mabilang ang mga problems na nasosolve ng user at ma-check ang practice time gamit ang stopwatch.

Objectives

The main objective of this project is to learn how to use React state and hooks. Gusto rin naming matutunan kung paano mag-count ng solved problems gamit ang button, gumawa ng stopwatch na puwedeng i-start at i-stop, at magpakita ng message kapag naka-solve na ng five problems. We also want to understand kung paano nagsha-share ng data ang components gamit ang props.

Features

The app has a Practice Tracker na nagpapakita kung ilang problems na ang nasosolve. Kapag pinindot ang Solve +1 button, madadagdagan ng one ang count. Ang Reset button naman ay ibinabalik ang count sa zero. May Stopwatch din na nagpapakita ng time in minutes and seconds. The Start/Stop button is used to start or pause the timer. Kapag umabot sa five ang solved problems, lalabas ang message na "Great job!"

Technologies Used

This project uses React Native, Expo, TypeScript, JavaScript, and React Hooks. Ginagamit ang mga technologies na ito para magawa at mapatakbo ang mobile app.

React Hooks Used

The "useState" hook is used to store the solved count, timer status, and elapsed time. Ang "useEffect" naman ay ginagamit para tumakbo ang timer every second at ma-stop ito kapag kailangan. We also use a custom hook called "useStopwatch" para i-manage ang stopwatch. Nagdadagdag ito ng one second habang running ang timer. Ginagamit din ang "clearInterval" para ma-stop nang maayos ang timer.

Components

The "PracticeTracker" component shows the solved count, Solve +1 button, and Reset button. Dito rin lumalabas ang "Great job!" kapag umabot sa five ang count. The "Stopwatch" component displays the current time at kung running or paused ang timer. The "LabScreen" component is the main part of the app. Ito ang nagma-manage ng data at nagkokonekta sa PracticeTracker at Stopwatch components.

How to Run the Application

First, kailangan i-install ang Node.js at Visual Studio Code. Then, open the project folder in Visual Studio Code and open the terminal. Kung hindi pa installed ang project dependencies, type "npm install". After that, type "npx expo start" para patakbuhin ang app. Open Expo Go sa phone at i-scan ang QR code para makita at ma-test ang application. Puwede rin gumamit ng emulator.

Testing

We need to test the app para malaman kung gumagana nang tama ang lahat ng features. Dapat magsimula sa zero ang solved count, at dapat "00:00" at "Paused" ang unang display ng stopwatch. Kapag pinindot ang Solve +1, madadagdagan ng one ang count. Kapag napindot ito nang five times, dapat lumabas ang "Great job!" message. Kapag pinindot ang Reset, babalik sa zero ang solved count pero hindi magre-reset ang stopwatch. Kapag pinindot ang Start, tatakbo ang timer, at kapag pinindot ang Stop, magpa-pause ito.

Common Errors and Fixes

One common error is incorrect capitalization. Ang mga component tulad ng "View", "Text", at "Pressable" ay dapat tama ang spelling at capitalization. Another error is using incorrect prop names. Dapat pareho ang spelling ng "onSolve" at "onReset" sa lahat ng parts ng code kung saan ginagamit ang mga ito. Puwede ring magkaroon ng error kapag may missing braces or parentheses, kaya kailangan i-check nang mabuti ang code. Lastly, kapag nakalimutang gamitin ang "clearInterval", maaaring hindi ma-stop nang maayos ang timer. To fix this, kailangan itong ilagay sa cleanup function ng "useEffect".
