import chatWindow from './components/chatwindow/chatWindow';
import chatConfig from './components/chatwindow/config/kore-config';

import Korei18nPlugin from './plugins/i18n';
import KoreFileUploaderPlugin from './plugins/fileUploaderPlugin/fileUploader';
import KorePickersPlugin from './plugins/korePickers';
import GraphTemplatesPlugin from './plugins/graphTemplatesPlugin';
import SpeechToTextPlugin from './plugins/textSpeechPlugins/speechToTextPlugin';
import TtsSpeechPlugin from './plugins/textSpeechPlugins/ttsSpeechPlugin';
import AgentDesktopPlugin from './plugins/agentDesktop/agentdesktop';


import KoreWidgetSDK from './components/widgets/kore-widgets';
import widgetsConfig from './components/widgets/config/kore-widgets-config';

import KRSearch from './components/search/findly-sdk';
import KRSearchConfig from './components/search/config/findly-config';


export {
  chatConfig,
  chatWindow,
  widgetsConfig,
  KoreWidgetSDK,
  Korei18nPlugin,
  KoreFileUploaderPlugin,
  KorePickersPlugin,
  GraphTemplatesPlugin,
  KRSearch,
  KRSearchConfig,
  SpeechToTextPlugin,
  TtsSpeechPlugin,
  AgentDesktopPlugin
};
