if (event.reaction === "😠" && event.senderID === api.getCurrentUserID()) {
          api.unsendMessage(event.messageID);