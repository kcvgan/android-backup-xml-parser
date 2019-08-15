export const INVALID_XML = `INVALID_XML`;

export const SMS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="1">
  <sms address="+48784760393" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
<smses/>`;

export const MANY_SMS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="4">
  <sms address="+48784760393" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <sms address="784760393" date="1520012582494" type="2" body="m2" readable_date="02.03.2018 6:43:02 PM" contact_name="Sublokator" />
  <sms address="+48784760393" date="1520013248171" type="1" body="m3" readable_date="02.03.2018 6:54:08 PM" contact_name="Sublokator" />
  <sms address="784760393" date="1522827279998" type="2" body="m4" readable_date="04.04.2018 9:34:39 AM" contact_name="Sublokator" />
<smses/>`;

export const MANY_THREADS_SMS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="4">
  <sms address="+48784760393" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <sms address="784760393" date="1520012582494" type="2" body="m2" readable_date="02.03.2018 6:43:02 PM" contact_name="Sublokator" />
  <sms address="+48784760393" date="1520013248171" type="1" body="m3" readable_date="02.03.2018 6:54:08 PM" contact_name="Sublokator" />
  <sms address="784760393" date="1522827279998" type="2" body="m4" readable_date="04.04.2018 9:34:39 AM" contact_name="Sublokator" />
  <sms address="784760394" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <sms address="784760394" date="1520012582494" type="2" body="m2" readable_date="02.03.2018 6:43:02 PM" contact_name="Sublokator" />
  <sms address="784760394" date="1520013248171" type="1" body="m3" readable_date="02.03.2018 6:54:08 PM" contact_name="Sublokator" />
  <sms address="784760394" date="1522827279998" type="2" body="m4" readable_date="04.04.2018 9:34:39 AM" contact_name="Sublokator" />
<smses/>`;

export const MMS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="1">
  <mms text_only="1" msg_box="2" date="1525109537000" m_type="128" address="+48784760393" readable_date="30.04.2018 7:32:17 PM" contact_name="Sublokator">
    <parts>
      <part seq="-1" ct="image/jpeg" name="null" text="src" />
    </parts>
    <addrs>
      <addr address="+48784760393" type="151" />
    </addrs>
  </mms>
</smses>`;

export const MMS_WITH_SMS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="1">
  <sms address="+48784760393" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <mms text_only="1" msg_box="2" date="1525109537000" m_type="128" address="+48784760393" readable_date="30.04.2018 7:32:17 PM" contact_name="Sublokator">
    <parts>
      <part seq="-1" ct="image/jpeg" name="null" text="src" />
    </parts>
    <addrs>
      <addr address="+48784760393" type="151" />
    </addrs>
  </mms>
</smses>`;

export const MMS_WITH_SMS_MANY_THREADS_XML = `<?xml version='1.0' encoding='UTF-8' standalone='yes' ?>
<smses count="1">
  <sms address="+48784760394" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <mms text_only="1" msg_box="2" date="1525109537000" m_type="128" address="+48784760393" readable_date="30.04.2018 7:32:17 PM" contact_name="Sublokator">
    <parts>
      <part seq="-1" ct="image/jpeg" name="null" text="src" />
    </parts>
    <addrs>
      <addr address="+48784760394" type="151" />
    </addrs>
  </mms>
  <sms address="+48784760393" date="1519980674209" type="1" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />

  <sms address="+48784760394" date="1519980674209" type="2" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
  <mms text_only="1" msg_box="2" date="1525109537000" m_type="128" address="+48784760393" readable_date="30.04.2018 7:32:17 PM" contact_name="Sublokator">
    <parts>
      <part seq="-1" ct="image/jpeg" name="null" text="src" />
    </parts>
    <addrs>
      <addr address="+48784760393" type="151" />
    </addrs>
  </mms>
  <sms address="+48784760393" date="1519980674209" type="2" body="m1" readable_date="02.03.2018 9:51:14 AM" contact_name="Sublokator" />
</smses>`;
