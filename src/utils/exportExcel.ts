/**
 * 下载功能方法
 * @param {ini} res 获取到的文件流
 * @param {string} name 下载后要显示的文件名称
 */
export const downloadExcel = (res: any, name: string) => {
    const blob = new Blob([res], { type: 'application/vnd.ms-excel' })
    const fileName = `${name}.xls`
    if ('download' in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = fileName
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
    } else {
        const nav = (window.navigator as any);
        if (nav.msSaveOrOpenBlob) {
            nav.msSaveBlob(blob, fileName)
        }
    }
}
