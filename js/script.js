// Elenco contatti
const app = new Vue({
    el:'#app',
    data: {
search: '',
utenteSelezionato: null,
privateMessage: '',
botMessage: "Ok!",
listechat: [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
],
},

//Funzione "cerca" per la chat 
computed:
{
    filtraLista:function()
    {
        var self=this;
        return this.listechat.filter( function(cust) {
            return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;
        });
    }
},

methods: {

    //Visualizzo i messaggi chat
    selezioneUtente(index) {
        console.log(index);
        this.utenteSelezionato = this.listechat[index];
        console.log(this.utenteSelezionato);
    },

    //Aggiungo messaggio e ricevo risposta
    addMessage() {
        if(this.privateMessage.trim() !== '') {
            this.utenteSelezionato.messages.push({
                message: this.privateMessage,
                status: 'sent',
                date: dayjs().format('DD/MM/YYYY HH:mm:ss')
                });

                this.privateMessage = '';

            setTimeout((addMessage) => {
                this.utenteSelezionato.messages.push({
                    message: this.botMessage,
                    status: 'received',
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss')
                })
            }, 1000)}
        }
    },
});
