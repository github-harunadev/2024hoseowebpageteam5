# 공통

## wrapper
모든 html 요소를 body에 직접 배치하지 않고, wrapper 역할을 하는 div 안에 배치합니다.
```
<div class="wrapper">
	...
</div>
```

## sticky menu
모든 html 페이지 (랜딩 페이지 제외)에 항상 배치될 고정 메뉴입니다.
```
<div class="sticky-menu">
	<div class="logo">
		<img src="로고파일 경로" />
	</div>
	<div class="button-group">
		<button class="button selected">선택된 버튼</button>
		<button class="button">일반 버튼</button>
	</div>
</div>
```

## sticky-menu : button-group 및 button
button-group 아래 button을 여러개 배치할 수 있습니다.
마우스를 갖다대면 배경이 white 5%로 페이드인/아웃합니다.
현재 열려있는 페이지에 맞는 버튼을 하이라이트 하려면 selected 클래스를 추가하세요.
```
<div class="button-group">
	<button class="button selected">선택된 버튼</button>
	<button class="button">일반 버튼</button>
</div>
```


# 랜딩 페이지

## 배경
랜딩 페이지 배경에 쓰이는 스타일. 브라우저 사이즈에 맞게, 중심을 기준으로 보여집니다.
.wrapper 클래스와 함께 사용되어야 합니다.
/assets/images/ 에 landing-bg.jpg 이름으로 배경 사진을 업로드하여 사용합니다.
```
<div class="wrapper landing-bg">
	...
</div>
```

## 인시디어스 
194x55 사이즈의 인시디어스 로고.
항상 landing-bg 의 자식으로 존재해야 합니다.
/assets/images/ 에 insidious-logo.png 또는 insidious-logo-white.png 파일을 사용합니다.
```
<div class="landing-bg">
	<img class="landing-logo" src="assets/images/insidious-logo.png" />
</div>
```

## 인시디어스 로고
458x143 사이즈의 인시디어스 로고.
항상 landing-bg 의 자식으로 존재해야 합니다.
/assets/images/ 에 insidious-logo.png 또는 insidious-logo-white.png 파일을 사용합니다.
```
<div class="landing-bg">
	<img class="landing-logo" src="assets/images/insidious-logo.png" />
</div>
```

## 한줄 소개문
"모든 이야기에는 시작이 있다." 글귀가 들어갈 소개문.
항상 landing-bg 의 자식으로 존재해야 합니다.
```
<div class="landing-bg">
	<p class="landing-desc"> ... </p>
</div>
```

# 어바웃 페이지


## 배경
어바웃 페이지 배경에 쓰이는 스타일. 브라우저 사이즈에 맞게, 중심을 기준으로 보여집니다.
.wrapper 클래스와 함께 사용되어야 함.
/assets/images/ 에 about-bg-blur.jpg 이름으로 배경 사진을 업로드하여 사용합니다.
```
<div class="wrapper about-bg">
	...
</div>
```
