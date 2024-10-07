import { H3, H4, View } from "tamagui";
import { StandardScreen } from "../StandardScreen";

export function AtmFinder() {
  return (
    <StandardScreen>
      <H4>ATM services available in CBD</H4>
      <View f={1} jc="center" ai="center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12604.542107867359!2d144.94744863462506!3d-37.83371296528391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad667fe272e9021%3A0xa7db4c61bb9e7525!2sWestpac%20ATM%20South%20Melbourne!5e0!3m2!1sen!2sau!4v1728296491856!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </View>
    </StandardScreen>
  );
}
