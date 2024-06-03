# 공통

## wrapper
모든 html 요소를 body에 직접 배치하지 않고, wrapper 역할을 하는 div 안에 배치합니다.
```html
<div class="wrapper">
	...
</div>
```

## sticky menu
모든 html 페이지 (랜딩 페이지 제외)에 항상 배치될 고정 메뉴입니다.
```html
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
```html
<div class="button-group">
	<button class="button selected">선택된 버튼</button>
	<button class="button">일반 버튼</button>
</div>
```


# 시리즈 페이지

각 포스터와 년도+이름을 입력할 수 있습니다.
<div class="item"> 을 복제해서 더 많은 포스터를 표시할 수 있습니다.
/assets/images/ 에 poster(숫자).jpg 이름으로 포스터 사진을 업로드하여 사용합니다.
p 안에 span이 감싸져 있으며, span은 년도 표시, p는 작품 이름을 표시합니다.
```html
<div class="series-collection">
	<div class="item">
		<img src="../assets/images/poster0.jpg" />
		<p><span>2024</span> 인시디어스 n</p>
	</div>
	
	<div class="item"> ... </div>
</div>
```

## 애니메이션이 작동하지 않는 경우?

assets/styles.css 스타일시트 파일을 열어서 196번째 줄에 가면 아래와 같은 코드를 확인할 수 있습니다:
```css
...

.series-collection > *:nth-child(4) {
	animation-duration: 0.75s;
}

...
```
항목을 복제한 후, *:nth-child(숫자) 의 숫자를 1개씩 증감 시키고 animation-duration의 값을 0.25s 씩 증감합니다.
```css
...

.series-collection > *:nth-child(4) {
	animation-duration: 0.75s;
}
.series-collection > *:nth-child(5) {  // 4 -> 5
	animation-duration: 1s;  // 0.75s -> 1s
}

...
```



# 감독 및 출연진 페이지

스태프의 이름과 영문 이름, 그리고 프로필 사진을 표시합니다.
h2에 있는 섹션 이름, 그리고 <div class="item"> 을 복제해서 더 많은 스태프를 표시할 수 있습니다.
p 에는 스태프의 한국어 이름, span에는 스태프의 영어 이름을 입력합니다.
/assets/images/ 에 staff(숫자).jpg 이름으로 포스터 사진을 업로드하여 사용합니다.
```html
<div class="staff-subsection">
	<h2>섹션 이름</h2>
	<div class="collection">
		<div class="item">
			<img src="../assets/images/staff0.jpg" />
			<p>이름</p>
			<span>영문 이름</span>
		</div>
		
		<div class="item"> ... </div>
	</div>
</div>
```

## 애니메이션이 작동하지 않는 경우?

assets/styles.css 스타일시트 파일을 열어서 259번째 줄에 가면 아래와 같은 코드를 확인할 수 있습니다:
```css
...

.staff-subsection > .collection > *:nth-child(6) {
	animation-duration: 2s;
}

...
```
항목을 복제한 후, *:nth-child(숫자) 의 숫자를 1개씩 증감 시키고 animation-duration의 값을 0.25s 씩 증감합니다.
```css
...

.staff-subsection > .collection > *:nth-child(6) {
	animation-duration: 2s;
}
.staff-subsection > .collection > *:nth-child(7) {  // 6 -> 7
	animation-duration: 2.25s;  // 2s -> 2.25s
}

...
```