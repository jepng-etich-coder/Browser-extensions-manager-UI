/_================variables===============_/
:root {
/_color palettes_/
--white: #ffff;
--neutral-900: hsl(227, 75%, 14%);
--neutral-800: hsl(226, 25%, 17%);
--neutral-700: hsl(225, 23%, 24%);
--neutral-600: hsl(226, 11%, 37%);
--neutral-300: hsl(0, 0%, 78%);
--neutral-200: hsl(217, 61%, 90%);
--neutral-100: hsl(0, 0%, 93%);
--red-400: hsl(3, 86%, 64%);
--red-500: hsl(3, 71%, 56%);
--red-700: hsl(3, 77%, 44%);

/_gradients_/
--light-gradient: linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%);
--dark-gradient: linear-gradient(180deg, #040918 0%, #091540 100%);

/_typography_/
--font-family: "Noto Sans", sans-serif, arial, sans-serif;
--font-size-sm: 0.8rem;
--font-size-base: 1rem;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;

/_spacing_/
--spacing-xxs: 0.25rem;
--spacing-xs: 0.75rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-custom: 4rem;

/_ border radius_/
--border-radius-sm: 0.5rem;
--border-radius-base: 1rem;
--border-radius-lg: 1.5rem;
}

$breakpoints: (
// Extra small devices (phones, 600px and down)
xs: 37.5rem,
// Small devices (portrait tablets and large phones, 600px and up)
sm: 37.5rem,
//Medium devices (landscape tablets, 768px and up)
md: 48rem,
//Large devices (laptops/desktops, 992px and up),
lg: 62rem,
// Extra large devices (large laptops and desktops, 1200px and up)
xl: 75rem
);

/_================global base resets===============_/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  &::before,
  &::after {
  box-sizing: inherit;
  }
  }

//typography

h1,
h3 {
color: var(--neutral-900);
}

p {
margin: var(--spacing-sm) 0 var(--spacing-xl) 0;
font-size: var(--font-size-sm);
}

body {
height: 100vh;
height: 100%;
background: var(--light-gradient);
font-family: var(--font-family);
font-size: var(--font-size-base);
color: var(--neutral-600);
}

/_================components===============_/

.container {
width: 65%;
margin: 0 auto;

header {
.search-bar {
background-color: var(--white);
border-radius: var(--border-radius-base);
padding: var(--spacing-sm);
margin: var(--spacing-xl) 0 var(--spacing-custom) 0;
display: flex;
justify-content: space-between;
align-items: center;
.moon-dark-mode {
border: 0px solid black;
border-radius: var(--border-radius-sm);
padding: var(--spacing-xs);
background-color: var(--neutral-100);
margin-bottom: -0.3rem;
}
}
nav {
// display: flex;
// justify-content: space-between;
// align-items: center;
margin: var(--spacing-lg) 0;
.nav-btns {
display: flex;
gap: var(--spacing-sm);
.nav-btn {
background-color: var(--white);
border: none;
border-radius: var(--border-radius-base);
padding: var(--spacing-xxs) var(--spacing-xs);
font-size: var(--font-size-base);
font-family: var(--font-family);
color: var(--neutral-900);
}
}
}
}

main {
container-type: inline-size;
.card-wrapper {
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-template-rows: auto;
// grid-gap: var(--spacing-xs);
margin-bottom: var(--spacing-xl);
padding: var(--spacing-md);

      .card {
        max-width: 100%;
        max-height: 100%;
        padding: var(--spacing-md);
        border-radius: var(--border-radius-base);
        background-color: var(--white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .card-items,
        .card-actions {
          flex: 0 0 auto;
        }

        .card-items {
          display: flex;
          gap: var(--spacing-md);
          flex-grow: 1;
          .card-img {
            height: 60px;
            width: 60px;
          }
        }

        .card-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .card-action-btn {
            background-color: var(--white);
            border: solid 0.1rem var(--neutral-300);
            border-radius: var(--border-radius-lg);
            padding: var(--spacing-xxs) var(--spacing-xs);
            font-size: var(--font-size-sm);
            font-family: var(--font-family);
            color: var(--neutral-900);
          }
          .toggleSwitch {
            position: relative;
            display: inline-block;
            width: 30px;
            height: 16px;
            cursor: pointer;
          }

          /* Now use the slider as the background */
          .slider {
            background-color: var(--neutral-200);
            border-radius: var(--border-radius-lg);
            display: block;
            width: 100%;
            height: 100%;
            transition: background-color 0.3s ease;
            position: relative;
          }

          /* The circle inside the slider */
          .slider::before {
            content: "";
            position: absolute;
            margin: 2px;
            width: 12px;
            height: 12px;
            background-color: white;
            border-radius: 50%;
            transition: transform 0.3s ease;
          }

          /* Change background + move circle */
          .toggleSwitch input:checked ~ .slider {
            background-color: var(--red-700);
          }

          .toggleSwitch input:checked ~ .slider::before {
            transform: translateX(20px);
          }

          input {
            display: none;
          }
        }
      }
    }

}
}

/_===============Responsive design==============_/

@container (0 < width <=390px) {
nav {
border: solid 1px orange;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: var(--spacing-lg) 0;
}
main .card-wrapper {
background-color: blue;
display: grid;
// grid-template-columns: repeat(2, 1fr);
// grid-template-rows: auto;
grid-gap: var(--spacing-xxs);
margin-bottom: var(--spacing-md);
}
}

@container (390px <= width <= 990px) {
main .card-wrapper {
background-color: orange;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: auto;
grid-gap: var(--spacing-xxs);
margin-bottom: var(--spacing-md);
}
}

@container (991px <= width) {
main .card-wrapper {
background-color: magenta;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-gap: var(--spacing-xxs);
margin-bottom: var(--spacing-md);
}
}
