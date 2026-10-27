import 'package:flutter_bloc/flutter_bloc.dart';

// ==========================================
// 1. LES ÉVÉNEMENTS (Events)
// ==========================================
sealed class CounterEvent {}

final class IncrementPressed extends CounterEvent {}

final class DecrementPressed extends CounterEvent {}

final class ResetPressed extends CounterEvent {}

final class AddFivePressed extends CounterEvent {}

// ==========================================
// 2. LE BLOC (logique métier)
// ==========================================
class CounterBloc extends Bloc<CounterEvent, int> {
  CounterBloc() : super(0) {
    // Association Événement -> Traitement
    on<IncrementPressed>((event, emit) => emit(state + 1));

    on<DecrementPressed>((event, emit) {
      if (state > 0) emit(state - 1);
    });

    on<ResetPressed>((event, emit) => emit(0));

    on<AddFivePressed>((event, emit) => emit(state + 5));
  }
}
