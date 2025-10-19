import { config } from 'dotenv'
config()
import { allureReportsHelpers, assertJS, homeScreen, webviewScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    beforeEach(async () => {
        await homeScreen.waitForIsShown(true)
    })

    it(`[APP01-000007] deve acessar webview através do menu da Home`, async () => {
        await allureReportsHelpers.addAllureMobile(929, severity.normal, feature.webview)

        await homeScreen.clickBtnWebview()
        assertJS.isTrue(await webviewScreen.isWebviewContainerDisplayed(), 'A pagina de Webview não foi exibida')
    })
})