import React from "react"
import Container from "../atoms/Container";
import OsiTabs from "../molecules/OsiTabs";
import OsiTab from "../atoms/OsiTab";
import OsiForm from "../molecules/OsiForm";
import OsiTextField from "../atoms/OsiTextField";
import Header from "../organisms/Header";

const Tabs = () => {
    return(
        <Container>
            <Header/>
            <OsiTabs id="tabs_0" label="Root tab bar">
                <OsiTab id="tab_1" label="Tab 1" actionLabel="Navigation vers {$this} de {tab_1} de {tabs_0}">
                    <OsiTabs id="tabs_1" label="Tab bar1">
                        <OsiTab id="tab_1_1" label="Tab 1.1" actionLabel="Navigation vers {tab_1_1} de {tab_1}">
                            <OsiForm id="form_1" label="Formulaire">
                                <OsiTextField
                                    id="text11"
                                    label="Champ 1"
                                    required={true}
                                    selectedActionLabel="Champ {$$} de {form_2} sélectionné"
                                    modifiedActionLabel="Champ {$$} de {form_1} modifié"
                                />
                                <OsiTextField
                                    id="text12"
                                    label="Champ 2"
                                    selectedActionLabel="Champ {$$} de {form_2} sélectionné"
                                    modifiedActionLabel="Champ {$$} de {form_1} modifié"
                                    value="Toto"
                                />
                            </OsiForm>
                        </OsiTab>
                        <OsiTab id="tab_1_2" label="Tab 1.2" actionLabel="Navigation vers {$this} de {tab_1} de {tabs_0}">
                            <OsiTabs id="tabs_1_2" label="Tab bar1.2">
                                <OsiTab id="tab_1_2_1" label="Tab 1.2.1" actionLabel="Navigation vers {$this} de {tab_1_2_1} de {tabs_1_2}">
                                    <OsiTabs id="tabs_1_2_1" label="Tab bar1.2.1">
                                        <OsiTab id="tab_1_2_1_1" label="Tab 1.2.1.1" actionLabel="Navigation vers {$this} de {tab_1_2_1_1} de {tabs_1_2_1}">
                                        </OsiTab>
                                        <OsiTab id="tab_1_2_1_2" label="Tab 1.2.1.2" actionLabel="Navigation vers {$this} de {tab_1_2_1_2} de {tabs_1_2_1}">
                                            <OsiTabs id="tabs_1_2_1_2" label="Tab bar1.2.1.2">
                                                <OsiTab id="tab_1_2_1_2_1" label="Tab 1.2.1.2.1" actionLabel="Navigation vers {$this} de {tab_1_2_1_2_1} de {tabs_1_2_1_2}">
                                                    <OsiForm id="form_1_2_1_2_1" label="Formulaire">
                                                        <OsiTextField
                                                            id="text12121"
                                                            label="Champ 1"
                                                            selectedActionLabel="Champ {$$} de {form_1_2_1_2_1} sélectionné"
                                                            modifiedActionLabel="Champ {$$} de {form_1_2_1_2_1} modifié"
                                                        />
                                                        <OsiTextField
                                                            id="text12122"
                                                            label="Champ 2"
                                                            selectedActionLabel="Champ {$$} de {form_1_2_1_2_1} sélectionné"
                                                            modifiedActionLabel="Champ {$$} de {form_1_2_1_2_1} modifié"
                                                        />
                                                    </OsiForm>
                                                </OsiTab>
                                                <OsiTab id="tab_1_2_1_2_2" label="Tab 1.2.1.2.2" actionLabel="Navigation vers {$this} de {tab_1_2_1_2_1} de {tabs_1_2_1_2}">
                                                </OsiTab>
                                            </OsiTabs>
                                        </OsiTab>
                                        <OsiTab id="tab_1_2_1_3" label="Tab 1.2.1.3" actionLabel="Navigation vers {$this} de {tab_1_2_1_3} de {tabs_1_2_1}">
                                        </OsiTab>
                                    </OsiTabs>
                                </OsiTab>
                                <OsiTab id="tab_1_2_2" label="Tab 1.2.2" actionLabel="Navigation vers {$this} de {tab_1_2_2} de {tabs_1_2}">
                                    <OsiTabs id="tabs_1_2_2" label="Tab bar1.2.2">
                                        <OsiTab id="tab_1_2_2_1" label="Tab 1.2.2.1" actionLabel="Navigation vers {$this} de {tab_1_2_1_1} de {tabs_1_2_1}">
                                        </OsiTab>
                                        <OsiTab id="tab_1_2_2_2" label="Tab 1.2.2.2" actionLabel="Navigation vers {$this} de {tab_1_2_2_2} de {tabs_1_2_2}">
                                        </OsiTab>
                                        <OsiTab id="tab_1_2_2_3" label="Tab 1.2.2.3" actionLabel="Navigation vers {$this} de {tab_1_2_2_3} de {tabs_1_2_3}">
                                        </OsiTab>
                                    </OsiTabs>
                                </OsiTab>
                                <OsiTab id="tab_1_2_3" label="Tab 1.2.3" actionLabel="Navigation vers {$this} de {tab_1_2_2} de {tabs_1_2}">
                                </OsiTab>
                            </OsiTabs>
                        </OsiTab>
                    </OsiTabs>
                </OsiTab>
                <OsiTab id="tab_2" label="Tab 2" actionLabel="Navigation vers {$this} de {tab_2} de {tabs_0}">
                    <OsiForm id="form_2" label="Formulaire">
                        <OsiTextField
                            id="text21"
                            label="Champ 1"
                            selectedActionLabel="Champ {$$} de {form_2} sélectionné"
                            modifiedActionLabel="Champ {$$} de {form_2} modifié"
                        />
                        <OsiTextField
                            id="text22"
                            label="Champ 2"
                            selectedActionLabel="Champ {$$} de {form_2} sélectionné"
                            modifiedActionLabel="Champ {$$} de {form_2} modifié"
                        />
                    </OsiForm>
                </OsiTab>
            </OsiTabs>
        </Container>
    )
}

export default Tabs