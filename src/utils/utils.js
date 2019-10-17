export const isJSON = s => {
  try {
    JSON.parse(s)
  } catch (e) {
    return false
  }
  return true
}

export const formatNumber = number => String(number).padStart(2, '0')

export const formatMoney = money => Number(money).toFixed(2)

export const formatDate = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

export const formatTime = date => {
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minute = date.getMinutes()
  let second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

export const copyToClipboard = s => {
  let isSuccess = false
  let input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', s)
  document.body.appendChild(input)
  input.select()
  input.setSelectionRange(0, input.value.length)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    isSuccess = true
  }
  document.body.removeChild(input)
  return isSuccess
}
