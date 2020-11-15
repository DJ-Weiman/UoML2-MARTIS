import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToast,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import PinBox from "../components/PinBox";
import "./Inspection.css";
import axios from "axios";

interface RepairPut {
  put: boolean;
  message?: string;
}

const Tests: React.FC = () => {
  //   const [engineerID, setengineerID] = useState<string>();
  //   const [assetID, setassetID] = useState<string>();
  //   const [repairDate, setRepairDate] = useState<string>();
  //   const [comment, setComment] = useState<string>();
  //   const [putRepair, setPutRepair] = useState<RepairPut>({
  //     put: false,
  //     message: "Repair wasn't added",
  //   });

  //   const repairJSON = {
  //     engineerId: engineerID,
  //     assetId: assetID,
  //     repairDate: repairDate,
  //     comment: comment,
  //   };
  //   const updateRepairs: any = (repairJSON: string) => {
  //     console.log(repairJSON);
  //     return axios
  //       .put(`http://localhost:3000/repairs/addRepair`, repairJSON)
  //       .then((response) => {
  //         console.log(response.data);
  //         setPutRepair({ put: true, message: response.data });
  //       });
  //   };

  return (
    <IonPage>
      <PinBox />
      <IonHeader>
        <IonToolbar color="danger">
          <IonButtons slot="start">
            <IonMenuButton autoHide={false} menu="first"></IonMenuButton>
          </IonButtons>
          <IonTitle>Create Tests</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardHeader mode="ios" className="cardhead">
                  <IonCardTitle>Test Information</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonLabel position="fixed">New Test ID:</IonLabel>
                      <IonItem>
                        <IonInput
                          //value={assetID}
                          type="text"
                          //onIonChange={(e) => setassetID(e.detail.value!)}
                        ></IonInput>
                      </IonItem>
                      <IonLabel position="floating">Asset ID</IonLabel>
                      <IonItem>
                        <IonInput
                          //value={assetID}
                          type="text"
                          //onIonChange={(e) => setassetID(e.detail.value!)}
                        ></IonInput>
                      </IonItem>
                      <IonLabel position="floating">Inspector ID</IonLabel>
                      <IonItem>
                        <IonInput
                          //value={assetID}
                          type="text"
                          //onIonChange={(e) => setassetID(e.detail.value!)}
                        ></IonInput>
                      </IonItem>
                      <IonLabel position="floating">Supervisor ID</IonLabel>
                      <IonItem>
                        <IonInput
                          //value={assetID}
                          type="text"
                          //onIonChange={(e) => setassetID(e.detail.value!)}
                        ></IonInput>
                      </IonItem>
                      <IonLabel position="floating">Test Module ID</IonLabel>
                      <IonItem>
                        <IonInput
                          //value={assetID}
                          type="text"
                          //onIonChange={(e) => setassetID(e.detail.value!)}
                        ></IonInput>
                      </IonItem>
                      <IonItem>
                        <IonLabel position="floating">Frequency</IonLabel>
                        <IonSelect
                        //interface="popover"
                        // placeholder="Select Region"
                        //id="region"
                        //value="abc"
                        >
                          <IonSelectOption value="1">1</IonSelectOption>
                          <IonSelectOption value="2">2</IonSelectOption>
                          <IonSelectOption value="3">3</IonSelectOption>
                          <IonSelectOption value="4">4</IonSelectOption>
                          <IonSelectOption value="5">5</IonSelectOption>
                        </IonSelect>
                      </IonItem>
                      <IonItem>
                        <IonLabel>Urgent </IonLabel>
                        <IonToggle></IonToggle>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton color="danger" size="large" expand="block">
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tests;
