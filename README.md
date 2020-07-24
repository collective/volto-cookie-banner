# volto-cookie-banner

Volto cookie banner integration addon.

To be used with: [collective.volto.cookieconsent](https://github.com/collective/collective.volto.cookieconsent)

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.


## Usage

Wherever you want to add the component, import and use it like this:

```jsx
import { CookieBanner } from 'volto-cookie-banner'

const YourAppComponent = () => <CookieBanner />
```

### Add a widget for the controlpanel

Without any other customization, in the controlpanel you'll find a text area which will accept a json object.
This is the job for [volto-multilingual-widget](https://github.com/collective/volto-multilingual-widget).

```js
import MultilingualWidget from 'volto-multilingual-widget'

export const widgets = {
  ...defaultWidgets,
  id: {
    ...defaultWidgets.id,
    cookie_consent_configuration: MultilingualWidget(),
  },
}
```

### Styling

If you want to change or adapt styles, you should start adapting [volto-cookie-banner.css](src/volto-cookie-banner.css) and [react-cookie-consent styling docs](https://github.com/Mastermindzh/react-cookie-consent#styling-it).
