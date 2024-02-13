from rest_framework.viewsets import ModelViewSet

from accounts.models import CustomUser
from api.serializers import UserSerializer


class UsersModelViewSet(ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'
    lookup_url_kwarg = 'id'