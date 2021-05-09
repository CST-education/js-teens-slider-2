const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

let showed_box = 0
prevBtn.addEventListener('click', fPrevious)
nextBtn.addEventListener('click', fNext)

function fNext() {
  showed_box += -500

  if (showed_box < -2000) showed_box = 0

  document.getElementById('sld').style.transform =
    'translateY(' + showed_box + 'px)'
}

function fPrevious() {
  showed_box += 500

  if (showed_box > 0) showed_box = -2000

  document.getElementById('sld').style.transform =
    'translateY(' + showed_box + 'px)'
}
