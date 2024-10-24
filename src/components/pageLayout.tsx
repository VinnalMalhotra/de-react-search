import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { chatConfig, searchConfig } from "./config";
import Footer from "./footer";
import Header from "./header";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import { ChatPopUp } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";
import { useEffect } from "react";

type Props = {
  _site?: any;
  children?: React.ReactNode;
};


const PageLayout = ({ _site, children }: Props) => {
  useEffect(() => {
    if (typeof window !== undefined) console.log(`Hi`);
  }, [])
  return (
    <div className="min-h-screen">
      <Header _site={_site} />
      <div className="py-8">
        <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
          {children}
        </SearchHeadlessProvider>
      </div>
      <Footer _site={_site}></Footer>
      {typeof window !== 'undefined' && import.meta.env.YEXT_PUBLIC_CHAT_APIKEY &&
        import.meta.env.YEXT_PUBLIC_CHAT_BOTID && (
          <ChatHeadlessProvider config={chatConfig}>
            <ChatPopUp messageSuggestions={["1-1/4'' KNOCKOUT PUNCH", "KNOCKOUT PUNCHES AND DIES KIT", "DEWALT POWERSHIFT™ RAMMER WHEEL KIT"]}
              title="DEWALT® Support"
              stream={false}
              customCssClasses={{
                buttonIcon: "text-white",
                button: "chatHeaderAndBotResponseColors",
                panelCssClasses: {
                  messageBubbleCssClasses: {
                    text: "text-base",
                    text__user: "chatHeaderAndBotResponseColors",
                    bubble__user: "chatHeaderAndBotResponseColors",
                  },

                  inputCssClasses: {
                    sendButton: "chatHeaderAndBotResponseColors",
                    textArea: "chatTextboxColor",
                  },
                },
                headerCssClasses: {
                  container: "chatHeaderAndBotResponseColors",
                  title: "overflow-hidden",
                },
              }}
            />
          </ChatHeadlessProvider>
        )}
    </div>
  );
};

export default PageLayout;
