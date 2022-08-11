*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
   
}
html{
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
body{
    line-height:normal;
    font-size:16px;
    overflow-x: hidden;
    font-family: 'Inter', sans-serif;
}
:root{
    --midnightblue:#030047;
    --ghostwhite:#F7F8FC;
    --white:#ffffff;
    --sunglow:#ffcc3e;
    --lavenderblue:#695ff7;
    --lightgrey:#cccccc;
}
.content-wrapper
{
    max-width: 1144px;
    padding: 0 20px;
    margin: 0 auto;
}
.bg-section{
    background-repeat: no-repeat;
    background-size: cover;
}
.yellowbtn
{
    border: 2px solid var(--sunglow);
    background-color: transparent;
    color: var(--midnightblue);
    padding: 16px 32px;
    transition: .3s all;
    display: inline-block
}
.yellowbtn:hover
{
    background-color: var(--sunglow);
}
h1
{
    font-size: 48px;
    font-weight: 700;
    line-height: 68px;
}h2
{
    font-size: 55px;
    line-height: 54px;
    font-weight: 700;
}h3
{
    font-size: 45px;
    line-height: 54px;
    margin-bottom: 10px;
    font-weight: 700;
    letter-spacing: -0.9px;
}
h4
{
    font-size: 28px;
    line-height: 38px;
    font-weight: 700;
}
h6
{
    font-size: 16px;
    font-weight: 700;
    line-height: 17px;
}
p
{
    font-size: 17px;
    font-weight: 500;
    line-height: 30px;
}
a
{
    font-size: 13px;
    line-height: 17px;
    font-weight: 700;
    letter-spacing: 1.13px;
}
li
{
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
}
.yellowbtn1
{
    border: 2px solid var(--sunglow);
    background-color: transparent;
    color: var(--midnightblue);
    padding: 16px 32px;
    transition: .3s all;
    text-align: center;
    display: inline-block;
    margin-left: 38%;
    margin-right: 38%;
}
.yellowbtn1:hover
{
    background-color: var(--sunglow);
}
.yellowbtn2
{
    padding: 16px 15px;
}
@media (max-width:767px) {
    .yellowbtn1 
    {
        margin-right: 0%;
        margin-left: 0%;
        display: flex;
        justify-content: center;
        margin-top: 30px;
        padding: 18px 50px;
    }
}
@media (max-width:1024px) {
    p
    {
        font-size: 18px;
        line-height: 30px;
    }
}
