from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class KeyWord(models.Model):
    ''' Модель ключевого слова '''

    name = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.name}"



class Order(models.Model):
    ''' Модель объявления '''
    user    = models.ForeignKey(User, on_delete=models.CASCADE)
    title   = models.CharField(max_length=255, blank=False)
    
